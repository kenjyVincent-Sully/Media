import { useRouter } from 'next/router';
import { useState, useEffect, FC } from 'react';
import { getSearchResults } from '@api/search';
import Layout from 'layout';
import InfinteScrollSearchResults from '@components/Search/InfinteScrollSearchResults';
import styles from "@styles/Home.module.css";

const SearchPage: FC = () => {

    const router = useRouter();
    const { query = {} } = router || {};
    const { q = "" } = query || {};
    const [totalResults, setTotalResults] = useState([0]);

    const searchRequest = () => {
        getSearchResults(q as string).then(results => {
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
        <div className={styles.container}>
            <Layout>
                <h1>Résultas : {totalResults} Films</h1>
                <InfinteScrollSearchResults keywords={q} />
            </Layout>
        </div>
    );
}

export default SearchPage;