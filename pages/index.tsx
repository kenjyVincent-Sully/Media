import { GetStaticProps } from 'next';
import { getTopMovies, getListingMoviesInfiniteScroll, getGenres } from "./api/movies";
import { FC } from "react";
import Layout from "layout";
import MoviesTopList from "@components/MoviesTopList";
import MoviesList from "@components/MoviesList";
import styles from "@styles/Home.module.css";
import { Genre, Movie } from 'types/Movie';


const Movie: FC<{ topMovies: Array<Movie>, filtersGenres: Array<Genre>, initialMoviesList: Array<Movie> }> = ({ topMovies, filtersGenres, initialMoviesList }) => {

    return (
        <div className={styles.container}>
            <Layout>
                <MoviesTopList data={topMovies} />
                <hr className={styles.hr} />
                <MoviesList
                    initialLists={initialMoviesList}
                    genres={filtersGenres}
                />
            </Layout>
        </div>
    )
}

export default Movie;

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

