import { InferProps } from "prop-types";
import { GetStaticProps } from 'next';
import { getTopMovies, getMoviesList, getFilteredMovies } from "./api/movies";
import { DataMoviePropsTypes, GenresPropsTypes } from "types/Movie";
import Layout from "layout";
import MoviesTopList from "@components/Movies/MoviesTopList";
import MoviesList from "@components/Movies/MoviesList";
import MovieFilter from "@components/Movies/MovieFilter";

export default function Movie({ topMovies, filtersGenres, moviesList }: InferProps<typeof Movie.propTypes>) {


    return (
        <Layout>
            <MoviesTopList data={topMovies} />

            <MovieFilter genres={filtersGenres} />
            <MoviesList lists={moviesList} />
        </Layout>
    )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const dataTopMovie = await getTopMovies();
    const dataFilter = await getFilteredMovies();
    const dataList = await getMoviesList();

    return {
        props: {
            topMovies: dataTopMovie.results.slice(0, 10),
            filtersGenres: dataFilter.genres,
            moviesList: dataList.results
        }
    }
}

Movie.propTypes = {
    topMovies: DataMoviePropsTypes,
    filtersGenres: GenresPropsTypes,
};
