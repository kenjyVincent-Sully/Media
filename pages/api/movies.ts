// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { FilterParams } from 'types/Movie';


export function getTopMovies() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr&page=1`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getGenres() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getMoviesList(payload?: FilterParams) {

    const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${payload?.genre}&api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}