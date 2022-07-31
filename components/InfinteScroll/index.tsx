import { FC, useEffect, useContext, useState } from "react";
import { Movie as MovieAPI } from "../../pages/api/movies";
import MovieItem from "../MovieItem";
import { Container, Item } from "../MoviesTopList/style";
import { FiltersContext } from "context/FiltersContext";

const InfiniteScroll: FC<any> = () => {
  const {
    filters: { genre, year, sortBy },
  } = useContext(FiltersContext);
  const [pages, setPages] = useState(1);
  const [results, setResults] = useState([]);

  useEffect(() => {
    new MovieAPI()
      .getListingMoviesInfiniteScroll(pages, genre, year, sortBy)
      .then(({ page, results }) => {
        setResults(results);
        setPages(page);
      })
      .catch((err) => console.log(err));
  }, [pages, genre, year, sortBy]);

  return (
    <Container>
      {results.map((item, i) => (
        <Item key={i}>
          <MovieItem movie={item} />
        </Item>
      ))}
    </Container>
  );
};

export default InfiniteScroll;
