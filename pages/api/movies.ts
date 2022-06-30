// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export function getTopMovies() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr&page=1&lenght=1`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getMoviesList(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}/listsapi_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr&page=1&lenght=1`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}