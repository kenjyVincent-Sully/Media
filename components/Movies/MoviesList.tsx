import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectDataLoaded, selectResults, setInitialMoviesList } from "@features/moviesListing/MoviesListingSlice";
import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import InfiniteScroll from "./InfinteScroll";


const MoviesList = ({ initialLists }) => {
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
            <h2>Tous les films</h2>
            <InfiniteScroll />
        </>

    )
}

export default MoviesList;
