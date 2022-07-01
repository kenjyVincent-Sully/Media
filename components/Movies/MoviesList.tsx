import { useAppSelector } from "app/hooks";
import { selectDataLoaded, selectResults } from "@features/movie/MovieSlice";
import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";


const MoviesList = ({ initialLists }) => {
    const [movies, setMovies] = useState(initialLists);
    const dataLoaded = useAppSelector(selectDataLoaded);
    const results = useAppSelector(selectResults);

    useEffect(() => {
        if (dataLoaded) {
            setMovies(results);
        }

    }, [results]);

    return (
        <>
            <h2>Tous les films</h2>

            {movies.map((movie: object, i: number) => {
                return (

                    <MovieItem key={i} movie={movie} />
                )
            })}

        </>

    )
}

export default MoviesList;
