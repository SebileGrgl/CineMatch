import { z } from "zod";

const serverSchema = z.object({
  TMDB_API_KEY: z.string().min(1, "TMDB_API_KEY is required"),
  TMDB_API_BASE_URL: z.url(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_TMDB_IMAGE_BASE_URL: z.url(),
});

export type ServerEnv = z.infer<typeof serverSchema>;
export type ClientEnv = z.infer<typeof clientSchema>;
export type Env = ServerEnv & ClientEnv;

// NEXT_PUBLIC_* vars must be referenced statically so Next.js can inline them in client bundles.
const runtimeEnv = {
  TMDB_API_KEY: process.env.TMDB_API_KEY,
  TMDB_API_BASE_URL: process.env.TMDB_API_BASE_URL,
  NEXT_PUBLIC_TMDB_IMAGE_BASE_URL: process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL,
};

function fail(error: z.ZodError): never {
  throw new Error(`Invalid environment variables:\n${z.prettifyError(error)}`);
}

function parseEnv(): Env {
  if (process.env.SKIP_ENV_VALIDATION) return runtimeEnv as Env;

  if (typeof window === "undefined") {
    const result = serverSchema.extend(clientSchema.shape).safeParse(runtimeEnv);
    if (!result.success) fail(result.error);
    return result.data;
  }

  const result = clientSchema.safeParse(runtimeEnv);
  if (!result.success) fail(result.error);

  return new Proxy(result.data as Env, {
    get(target, prop) {
      if (typeof prop !== "string" || prop in target) return Reflect.get(target, prop);
      throw new Error(`Server-only environment variable "${prop}" was accessed on the client.`);
    },
  });
}

export const env = parseEnv();
