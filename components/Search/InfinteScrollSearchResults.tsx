import { FC, useEffect, useContext, useState } from "react";
import { Search as SearchAPI } from "../../pages/api/search";
import MovieItem from "../MovieItem";
import { Container, Item } from "../MoviesTopList/style";
import { SearchContext } from "context/SearchContext";

const InfinteScrollSearchResults: FC<{
  keywords: string | string[];
}> = ({ keywords }) => {
  const { search } = useContext(SearchContext);
  const [pages, setPages] = useState(1);
  const [results, setResults] = useState([]);

  useEffect(() => {
    search &&
      new SearchAPI()
        .getSearchResultsInfiniteScroll(keywords, pages)
        .then(({ page, results }) => {
          setResults(results);
          setPages(page);
        })
        .catch((err) => console.log(err));
  }, [keywords, pages, search]);

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

export default InfinteScrollSearchResults;
