import { InferProps } from "prop-types";
import { GetStaticProps } from 'next';
import { getTopMovies, getMoviesList } from "./api/movies";
import { DataMoviePropsTypes } from "types/Movie";
import Layout from "layout";
import MoviesTopList from "@components/Movies/MoviesTopList";
import MoviesList from "@components/Movies/MoviesList";

export default function Movie({ initData }: InferProps<typeof Movie.propTypes>) {

    return (
        <Layout>
            <MoviesTopList data={initData} />
            <MoviesList />
        </Layout>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const data = await getTopMovies();

    return {
        props: {
            initData: data.results,
        }
    }
}

Movie.propTypes = {
    initData: DataMoviePropsTypes,
};
