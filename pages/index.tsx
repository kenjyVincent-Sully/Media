import { InferProps } from "prop-types";
import { GetStaticProps } from 'next';
import { getTopMovies, getMoviesList, getFilteredMovies } from "./api/movies";
import { DataMoviePropsTypes, GenresPropsTypes } from "types/Movie";
import Layout from "layout";
import MoviesTopList from "@components/Movies/MoviesTopList";
import MoviesList from "@components/Movies/MoviesList";
import MovieFilter from "@components/Movies/MovieFilter";

export default function Movie({ initData, filter }: InferProps<typeof Movie.propTypes>) {

    return (
        <Layout>
            <MoviesTopList data={initData} />
            <MoviesList />
            <MovieFilter genres={filter} />
        </Layout>
    )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const dataTopMovie = await getTopMovies();
    const dataFilter = await getFilteredMovies();

    return {
        props: {
            initData: dataTopMovie.results.slice(0, 10),
            filter: dataFilter.genres,
        }
    }
}

Movie.propTypes = {
    initData: DataMoviePropsTypes,
    filter: GenresPropsTypes,
};
