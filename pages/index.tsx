import { GetStaticProps } from 'next';
import { Movie as MovieAPI } from "./api/movies";
import { FC } from "react";
import { Layout } from "layout";
import MoviesTopList from "@components/MoviesTopList";
import MoviesList from "@components/MoviesList";
import styles from "@styles/Home.module.css";
import { Genre, Movie } from 'types/Movie';


const Movie: FC<{ topMovies: Array<Movie>, 
    filtersGenres: Array<Genre>, 
    initialMoviesList: Array<Movie>
}> = ({ topMovies, filtersGenres, initialMoviesList }) => (
    <Layout>
        <MoviesTopList data={topMovies} />
        <hr className={styles.hr} />
        <MoviesList
            initialLists={initialMoviesList}
            genres={filtersGenres}
        />
    </Layout>
);

export default Movie;

export const getStaticProps: GetStaticProps = async () => {
    const movieAPI = new MovieAPI();
    let dataTopMovie: any, dataFilter: any, dataList: any = [];
    await Promise.all([
        movieAPI.getTopMovies(),
        movieAPI.getGenres(),
        movieAPI.getListingMoviesInfiniteScroll(1, "-1", 2022, "popularity.desc"),
    ]).then(results => {
        [dataTopMovie, dataFilter, dataList] = results
    })

    return {
        props: {
            topMovies: dataTopMovie.results.slice(0, 10),
            filtersGenres: dataFilter.genres,
            initialMoviesList: dataList.results
        }
    }
}

