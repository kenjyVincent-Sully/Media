import { useRouter } from 'next/router';
import { useState, useEffect, FC } from 'react';
import Layout from 'layout';
import { getSearchResults } from '@api/search';
import InfinteScrollSearchResults from '@components/Search/InfinteScrollSearchResults';

const SearchPage: FC = () => {

    const router = useRouter();
    const { query = {} } = router || {};
    const { q = "" } = query || {};
    const [totalResults, setTotalResults] = useState([0]);

    const searchRequest = () => {
        getSearchResults(q).then(results => {

            setTotalResults(results.total_results);

        }).catch(err => console.log(err));
    }

    useEffect(() => {
        if (q) {
            searchRequest();
        }
    }, [q]);

    if (q.length === 0) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <Layout>
            <h1>
                Résultas :
                <a href='#movies'> Films : {totalResults} </a>
            </h1>

            <InfinteScrollSearchResults keywords={q} />
        </Layout>
    );
}

export default SearchPage;