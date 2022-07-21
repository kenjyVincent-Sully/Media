import { FC, Fragment, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { Search as SearchAPI } from "@api/search";
import { useInView } from 'react-intersection-observer';
import MovieItem from '../MovieItem';
import { Container, Item } from './style';
import { Movie } from 'types/Movie';

const InfinteScrollSearchResults: FC<{ keywords: string | string[] }> = ({ keywords }) => {
    const { ref, inView } = useInView();

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery('results', ({ pageParam = 1 }) => new SearchAPI().getSearchResultsInfiniteScroll(keywords, pageParam),
        {

            getNextPageParam: (data, pages) => {
                if (data.page < data.total_pages) {
                    return data.page + 1;
                }

                return false;
            },
        })

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (error) {
        // @ts-ignore
        return <p>Error: {error.message}</p>
    }

    if (data === null || typeof data === 'undefined') {
        return <div>Pas de resultat.</div>
    }

    return (
        <>
            <Container>
                {data.pages.map((page, i) => {
                    return (
                        <Fragment key={i}>
                            {page.results.map((movie: Movie) => {
                                return (
                                    <Item key={`${movie.id}`}>
                                        <MovieItem movie={movie} />
                                    </Item>
                                )
                            })}
                        </Fragment>
                    )
                })}
            </Container>
            <div>
                <button
                    ref={ref}
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load More'
                            : 'Nothing more to load'}
                </button>
            </div>
            <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
        </>
    )
}

export default InfinteScrollSearchResults;