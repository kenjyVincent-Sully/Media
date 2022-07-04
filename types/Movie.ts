import { RequestStatus } from "./Request";

export type Movie = {
    adult: boolean,
    id: number,
    backdrop_path: string,
    genre_ids: Array<number>,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type MoviesListingState = {
    filterGenre: string,
    filterYear: number,
    sortBy: string,
    dataLoaded: boolean,
    results: Array<Movie>,
    status: RequestStatus,
}

export type MoviesResults = {
    page: number,
    results: Array<Movie>,
    total_pages: number,
    total_results: number,
}

export type FilterParams = {
    genre: string,
    year: number,
    page?: number,
    sortBy: string,
}

export type Genre = {
    id: number,
    name: string,
}
