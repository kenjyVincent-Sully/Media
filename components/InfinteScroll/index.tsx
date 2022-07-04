import { FC, Fragment, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useAppSelector } from 'app/hooks';
import { useInView } from 'react-intersection-observer';
import { getListingMoviesInfiniteScroll } from '@api/movies';
import { selectFilterGenre, selectFilterYear, selectSortBy } from '@features/moviesListing/MoviesListingSlice';
import MovieItem from '../MovieItem';
import { Container, Item } from '../MoviesTopList/style';
import type { Movie } from 'types/Movie';

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

export default InfiniteScroll;