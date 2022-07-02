import { useInfiniteQuery } from 'react-query';
import { useAppSelector } from 'app/hooks';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import MovieItem from './MovieItem';
import { getListingMoviesInfiniteScroll } from '@api/movies';
import { selectFilterGenre, selectFilterYear } from '@features/moviesListing/MoviesListingSlice';


const InfiniteScroll: FC = () => {
    const filteredGenre = useAppSelector(selectFilterGenre);
    const filteredYear = useAppSelector(selectFilterYear);
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
    } = useInfiniteQuery('results', ({ pageParam = 1 }) => getListingMoviesInfiniteScroll(pageParam, filteredGenre, filteredYear),
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
    }, [filteredGenre, filteredYear]);

    useEffect(() => {
        if (inView) {
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
                    <div key={i} >
                        {page.results.map(movie => {
                            return (
                                <div key={`${movie.id}`}>
                                    <MovieItem movie={movie} />
                                </div>
                            )
                        })}
                    </div>
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