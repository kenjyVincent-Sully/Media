import { InferProps } from "prop-types";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectFilterGenre, filterGenreId, getMovies, selectFilterYear, filterYear } from "@features/moviesListing/MoviesListingSlice";
import { FC } from "react";

const MovieFilter: FC<any> = ({ genres }) => {
    const dispatch = useAppDispatch();
    const filteredGenre = useAppSelector(selectFilterGenre);
    const filteredYear = useAppSelector(selectFilterYear);

    const handleFilterGenre = (e: React.FormEvent<HTMLSelectElement>) => {

        const selectedGenre = e.currentTarget.value;

        dispatch(filterGenreId(selectedGenre));

        dispatch(getMovies({
            genre: selectedGenre,
            year: filteredYear
        }));
    }

    const handleFilterYear = (e: React.FormEvent<HTMLSelectElement>) => {
        const selectYear = parseInt(e.currentTarget.value);

        dispatch(filterYear(selectYear));

        dispatch(getMovies({
            year: selectYear,
            genre: filteredGenre,
        }));
    }


    const years = () => {
        let startYear = 1900;
        const currentYear = new Date().getFullYear();
        let arr = [];

        for (let i = currentYear; i > startYear + 1; i--) {
            arr.push(i);
        }
        return arr;
    }


    return (
        <div>
            <span>Trier par:</span>
            <select
                onChange={handleFilterGenre}
                value={filteredGenre}
            >
                <option value="-1">Genres</option>
                {
                    genres.map(genre => {

                        const { id, name } = genre;

                        return (
                            <option key={`${id}-${name}`} value={id}>{name}</option>
                        )
                    })
                }
            </select>

            <select
                onChange={handleFilterYear}
                value={filteredYear}
            >
                <option value="-1">Année</option>
                {
                    years().map((year, i) => {

                        return (
                            <option key={`${i}-id`} value={year}>{year}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default MovieFilter;