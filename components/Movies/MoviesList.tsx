import MovieItem from "./MovieItem";

const MoviesList = ({ lists }) => {

    return (
        <>
            <h2>Tous les films</h2>

            {lists.map((movies: object, i: number) => {
                return (

                    <MovieItem key={i} movie={movies} />
                )
            })}

        </>

    )
}

export default MoviesList;
