import "server-only";

import { env } from "@/config/env";

type QueryValue = string | number | boolean | undefined;

interface TmdbFetchOptions extends Omit<RequestInit, "method"> {
  params?: Record<string, QueryValue>;
}

export class TmdbError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "TmdbError";
  }
}

// v4 "API Read Access Tokens" are JWTs (Bearer auth); v3 keys go in the query string.
const isBearerToken = env.TMDB_API_KEY.startsWith("eyJ");

export async function tmdbFetch<T>(
  path: string,
  { params = {}, headers, ...init }: TmdbFetchOptions = {},
): Promise<T> {
  const url = new URL(`${env.TMDB_API_BASE_URL.replace(/\/$/, "")}${path}`);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) url.searchParams.set(key, String(value));
  }
  if (!isBearerToken) url.searchParams.set("api_key", env.TMDB_API_KEY);

  const response = await fetch(url, {
    ...init,
    headers: {
      accept: "application/json",
      ...(isBearerToken && { authorization: `Bearer ${env.TMDB_API_KEY}` }),
      ...headers,
    },
  });

  if (!response.ok) {
    throw new TmdbError(`TMDB request failed: ${response.status} ${path}`, response.status);
  }

  return (await response.json()) as T;
}
