import { useState, useEffect, FC, useContext } from 'react';
import { Search as SearchAPI } from "@api/search";
import { Layout } from 'layout';
import { SearchContext } from 'context/SearchContext';

const SearchPage: FC = () => {
    const { search } = useContext(SearchContext);
    const [totalResults, setTotalResults] = useState([0]);

    useEffect(() => {
        search && new SearchAPI().getSearchResults(search)
        .then(({ total_results }) => {
            setTotalResults(total_results);
        }).catch(err => console.log(err));
    }, [search]);

    if (!search) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <h1>Résultas : {totalResults} Films</h1>
        </Layout>
    );
}

export default SearchPage;