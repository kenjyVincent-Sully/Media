import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { selectDataLoaded, selectResults, setInitialMoviesList } from "@features/moviesListing/MoviesListingSlice";
import MovieFilter from "../MoviesFilters";
import InfiniteScroll from "../InfinteScroll";


const MoviesList = ({ initialLists, genres }) => {
    const [movies, setMovies] = useState(initialLists);
    const dataLoaded = useAppSelector(selectDataLoaded);
    const results = useAppSelector(selectResults);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setInitialMoviesList(initialLists));
    }, []);

    useEffect(() => {

        if (dataLoaded) {
            setMovies(results);
        }

    }, [dataLoaded, results]);

    return (
        <>
            <h1>Tous les films</h1>
            <MovieFilter genres={genres} />
            <InfiniteScroll />
        </>

    )
}

export default MoviesList;
