export function getTopMovies() {
    const url = `${process.env.NEXT_PUBLIC_PATH_API_URI}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr&page=1`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getGenres() {
    const url = `${process.env.NEXT_PUBLIC_PATH_API_URI}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}


export function getDetails(id?: number) {
    const url = `${process.env.NEXT_PUBLIC_PATH_API_URI}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getListingMoviesInfiniteScroll(page: number, genre: string, year: number, sort: string) {

    const genreParam = genre !== '-1' ? `with_genres=${genre}` : "";
    const yearParam = year !== -1 ? `primary_release_year=${year}` : "";
    const sortByParam = sort !== "-1" ? `sort_by=${sort}` : "";

    const url = `${process.env.NEXT_PUBLIC_PATH_API_URI}/discover/movie?${genreParam}&api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr&${yearParam}&page=${page}&${sortByParam}`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}