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


export function getDetails(id?: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getListingMoviesInfiniteScroll(page: number, genre: string, year: number,) {

    const genreParam = genre !== '-1' ? `with_genres=${genre}` : "";
    const yearParam = year !== -1 ? `primary_release_year=${year}` : "";

    const url = `https://api.themoviedb.org/3/discover/movie?${genreParam}&api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr&${yearParam}&page=${page}`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}