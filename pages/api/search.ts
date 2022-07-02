export function getSearchResults(keywords: string) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr&query=${keywords}`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getSearchResultsInfiniteScroll(keywords: string | string[], page: number) {

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY}&language=fr&query=${keywords}&page=${page}`;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}
