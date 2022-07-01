import { RequestStatus } from "./Request";
import { shape, arrayOf, objectOf, string, array, number, bool } from "prop-types";

export type Movie = {
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
    vote_count: number,
}

export type MovieState = {
    filterId: number,
    results: Array<Movie>,
    status: RequestStatus,
    dataLoaded: boolean,
}

export type FilterParams = {
    search?: string,
    genre?: string,
    name?: string
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