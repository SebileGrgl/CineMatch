import "server-only";

import { localeConfig, type Locale } from "@/i18n/config";
import { tmdbFetch } from "@/lib/tmdb/client";
import type { Movie } from "@/types/movie";
import type { TmdbMovie, TmdbPaginated } from "@/types/tmdb";

const ONE_HOUR = 60 * 60;

function toMovie(raw: TmdbMovie): Movie {
  return {
    id: raw.id,
    title: raw.title,
    overview: raw.overview,
    posterPath: raw.poster_path,
    backdropPath: raw.backdrop_path,
    releaseDate: raw.release_date,
    voteAverage: raw.vote_average,
    genreIds: raw.genre_ids,
  };
}

export async function getTrendingMovies(
  locale: Locale,
  window: "day" | "week" = "week",
): Promise<Movie[]> {
  const data = await tmdbFetch<TmdbPaginated<TmdbMovie>>(`/trending/movie/${window}`, {
    params: { language: localeConfig[locale].tmdbLanguage },
    next: { revalidate: ONE_HOUR },
  });
  return data.results.map(toMovie);
}
