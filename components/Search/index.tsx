import { useState } from 'react';
import { Search as SearchAPI } from "@api/search";
import { Form, Search, ButtonSearch } from './style';

const SearchBar = () => {
    const [results, setResults] = useState([]);

    const handleSearch = ( { currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
       new SearchAPI().getSearchResults(value)
       .then(({ results }) => {
        setResults(results);
      })
      .catch((err) => console.log(err));
    }

    return (
        <div>
            <Form action='/search-page' method='GET'>
                <Search name='q'
                    type="search"
                    placeholder='Rechercher un film'
                    onChange={handleSearch}
                />
                <ButtonSearch type="submit" aria-label="Recherche">Recherche</ButtonSearch>

            </Form>
        </div>
    )
}

export default SearchBar;