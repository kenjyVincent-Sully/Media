import { InferProps } from "prop-types";
import { GetStaticProps } from 'next';
import { getTopMovies, getListingMoviesInfiniteScroll, getGenres } from "./api/movies";
import { DataMoviePropsTypes, GenresPropsTypes } from "types/Movie";
import Layout from "layout";
import MoviesTopList from "@components/Movies/MoviesTopList";
import MoviesList from "@components/Movies/MoviesList";
import MovieFilter from "@components/Movies/MovieFilter";
import SearchBar from "@components/Search/SearchBar";


export default function Movie({ topMovies, filtersGenres, initialMoviesList }: InferProps<typeof Movie.propTypes>) {

    return (
        <Layout>
            <SearchBar />
            <MoviesTopList data={topMovies} />
            <MovieFilter genres={filtersGenres} />
            <MoviesList initialLists={initialMoviesList} />
        </Layout>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const dataTopMovie = await getTopMovies();
    const dataFilter = await getGenres();
    const dataList = await getListingMoviesInfiniteScroll(1, "-1", 2022, "popularity.desc");

    return {
        props: {
            topMovies: dataTopMovie.results.slice(0, 10),
            filtersGenres: dataFilter.genres,
            initialMoviesList: dataList.results
        }
    }
}

Movie.propTypes = {
    topMovies: DataMoviePropsTypes,
    filtersGenres: GenresPropsTypes,
    initialMoviesList: DataMoviePropsTypes
};
