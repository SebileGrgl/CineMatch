import { env } from "@/config/env";

export type TmdbImageSize = "w185" | "w342" | "w500" | "w780" | "w1280" | "original";

export function tmdbImageUrl(path: string | null, size: TmdbImageSize = "w500"): string | null {
  if (!path) return null;
  return `${env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL.replace(/\/$/, "")}/${size}${path}`;
}
