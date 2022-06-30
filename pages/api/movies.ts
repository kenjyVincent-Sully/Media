// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { FilterParams } from 'types/Movie';


export function getTopMovies() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr&page=1`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getFilteredMovies() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getMoviesList() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}