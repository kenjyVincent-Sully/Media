import { useInfiniteQuery } from 'react-query';
import { getSearchResultsInfiniteScroll } from '@api/search';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import MovieItem from '../Movies/MovieItem';
import { Container, Item } from './style';

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
    } = useInfiniteQuery('results', ({ pageParam = 1 }) => getSearchResultsInfiniteScroll(keywords, pageParam),
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

    return status === 'loading' ? (
        <p>Loading...</p>
    ) : status === 'error' ? (
        // @ts-ignore
        <p>Error: {error.message}</p>
    ) : (
        <>


            {data.pages.map((page, i) => {

                return (
                    < Container key={i} >
                        {
                            page.results.map(movie => {

                                return (
                                    <Item key={`${movie.id}`}>
                                        <MovieItem movie={movie} />
                                    </Item>
                                )
                            })
                        }
                    </Container>
                )


            })}
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