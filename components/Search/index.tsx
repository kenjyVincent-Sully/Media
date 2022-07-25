import { useEffect, useState } from 'react';
import { Search as SearchAPI } from "@api/search";
import { Form, Search, ButtonSearch } from './style';
import { SearchNormalizer } from 'models/search';

const SearchBar = () => {
    const [results, setResults] = useState<SearchNormalizer[]>([]);
    const [total, setTotal] = useState(0)

    const handleSearch = ( { currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
       new SearchAPI().getSearchResults(value)
        .then(({totalItems, items }) => {
            setResults(items);
            setTotal(totalItems);
        })
        .catch((err) => console.log(err));
    }

    useEffect(() => {
        console.log(results);
    },[results]);

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