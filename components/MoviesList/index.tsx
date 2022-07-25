import { FC, useEffect, useState } from "react";
import MovieFilter from "../MoviesFilters";
import { Genre, Movie } from "types/Movie";


const MoviesList: FC<{ initialLists: Array<Movie>, genres: Array<Genre> }> = ({ initialLists, genres }) => {
    return (
        <>
            <h1>Tous les films</h1>
            <MovieFilter genres={genres} />
        </>
    )
}

export default MoviesList;
