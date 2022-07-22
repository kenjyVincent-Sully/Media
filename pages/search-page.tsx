import { useRouter } from 'next/router';
import { useState, useEffect, FC } from 'react';
import { Search as SearchAPI } from "@api/search";
import Layout from 'layout';
import InfinteScrollSearchResults from '@components/Search/InfinteScrollSearchResults';

const SearchPage: FC = () => {
    const { query: { q } } = useRouter();
    const [totalResults, setTotalResults] = useState([0]);

    useEffect(() => {
        q && new SearchAPI().getSearchResults(q as string)
        .then(({ total_results }) => {
            setTotalResults(total_results);
        }).catch(err => console.log(err));
    }, [q]);

    if (!q) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <h1>Résultas : {totalResults} Films</h1>
            <InfinteScrollSearchResults keywords={q} />
        </Layout>
    );
}

export default SearchPage;