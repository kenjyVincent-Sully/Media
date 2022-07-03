import { useInfiniteQuery } from 'react-query';
import { useAppSelector } from 'app/hooks';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { getListingMoviesInfiniteScroll } from '@api/movies';
import { selectFilterGenre, selectFilterYear, selectSortBy } from '@features/moviesListing/MoviesListingSlice';
import MovieItem from '../MovieItem';
import { Container, Item } from '../MoviesTopList/style';


const InfiniteScroll: FC = () => {
    const filteredGenre = useAppSelector(selectFilterGenre);
    const filteredYear = useAppSelector(selectFilterYear);
    const sortBy = useAppSelector(selectSortBy)
    const { ref, inView } = useInView();

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
        refetch,
    } = useInfiniteQuery('results', ({ pageParam = 1 }) => getListingMoviesInfiniteScroll(pageParam, filteredGenre, filteredYear, sortBy),
        {

            getNextPageParam: (data, pages) => {
                if (data.page < data.total_pages) {
                    return data.page + 1;
                }

                return false;
            },
        })

    useEffect(() => {

        refetch({ refetchPage: (page, index) => index === 0 })
    }, [filteredGenre, filteredYear, sortBy]);

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
                    <Container key={i}>
                        {page.results.map(movie => {
                            return (
                                <Item key={`${movie.id}`}>
                                    <MovieItem movie={movie} />
                                </Item>
                            )
                        })}
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

export default InfiniteScroll;