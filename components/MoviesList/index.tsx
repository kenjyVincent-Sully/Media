import { FC, useContext, useEffect, useState } from "react";
import MovieFilter from "../MoviesFilters";
import { Genre, Movie } from "types/Movie";
import InfiniteScroll from "@components/InfinteScroll";
import MovieItem from "@components/MovieItem";
import { Container, Item } from "@components/MoviesTopList/style";

const MoviesList: FC<{ initialLists: Array<Movie>; genres: Array<Genre> }> = ({
  initialLists,
  genres,
}) => {
  const [movies, setMovies] = useState(initialLists);

  return (
    <>
      <h1>Tous les films</h1>
      <MovieFilter genres={genres} />
      <InfiniteScroll />
    </>
  );
};

export default MoviesList;
