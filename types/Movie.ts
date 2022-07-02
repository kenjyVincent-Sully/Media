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
    sortBy: string,
    dataLoaded: boolean,
    results: Array<Movie>,
    status: RequestStatus,
}


export type FilterParams = {
    genre: string,
    year: number,
    page?: number,
    sortBy: string,
}

export const DataMoviePropsTypes = arrayOf(
    shape({
        id: number.isRequired,
        original_title: string.isRequired,
        overview: string.isRequired,
        popularity: number.isRequired,
        poster_path: string,
        release_date: string.isRequired,
        title: string.isRequired,
    }).isRequired,
).isRequired


export const GenresPropsTypes = arrayOf(
    shape({
        id: number.isRequired,
        name: string.isRequired,
    }).isRequired,
).isRequired