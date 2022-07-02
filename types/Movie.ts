import { RequestStatus } from "./Request";
import { shape, arrayOf, string, array, number, bool } from "prop-types";

export type Movie = {
    id: number,
    backdrop_path: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
}

export type MoviesListingState = {
    filterGenre: string,
    filterYear: number,
    dataLoaded: boolean,
    results: Array<Movie>,
    status: RequestStatus,
}


export type FilterParams = {
    genre: string,
    year: number,
    page?: number,
}

export const DataMoviePropsTypes = arrayOf(
    shape({
        id: number.isRequired,
        backdrop_path: string.isRequired,
        genre_ids: array.isRequired,
        original_language: string.isRequired,
        original_title: string.isRequired,
        overview: string.isRequired,
        popularity: number.isRequired,
        poster_path: string.isRequired,
        release_date: string.isRequired,
        title: string.isRequired,
        video: bool.isRequired,
        vote_average: number.isRequired,
    }).isRequired,
).isRequired


export const GenresPropsTypes = arrayOf(
    shape({
        id: number.isRequired,
        name: string.isRequired,
    }).isRequired,
).isRequired