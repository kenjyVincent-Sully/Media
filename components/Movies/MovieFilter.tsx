import { InferProps } from "prop-types";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectFilterGenre, filterGenreId, getMovies, selectFilterYear, filterYear, setSortBy, selectSortBy } from "@features/moviesListing/MoviesListingSlice";
import { FC } from "react";
import { Select } from "./style";

const MovieFilter: FC<any> = ({ genres }) => {
    const dispatch = useAppDispatch();
    const filteredGenre = useAppSelector(selectFilterGenre);
    const filteredYear = useAppSelector(selectFilterYear);
    const sortBy = useAppSelector(selectSortBy);

    const handleFilterGenre = (e: React.FormEvent<HTMLSelectElement>) => {

        const selectedGenre = e.currentTarget.value;

        dispatch(filterGenreId(selectedGenre));

        dispatch(getMovies({
            genre: selectedGenre,
            year: filteredYear,
            sortBy: sortBy,
        }));
    }

    const handleFilterYear = (e: React.FormEvent<HTMLSelectElement>) => {
        const selectYear = parseInt(e.currentTarget.value);

        dispatch(filterYear(selectYear));

        dispatch(getMovies({
            year: selectYear,
            genre: filteredGenre,
            sortBy: sortBy,
        }));
    }

    const handleSortBy = (e: React.FormEvent<HTMLSelectElement>) => {
        const sortByValue = e.currentTarget.value;

        dispatch(setSortBy(sortByValue));

        dispatch(getMovies({
            sortBy: sortByValue,
            year: filteredYear,
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
            <Select
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
            </Select>

            <Select
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
            </Select>

            <Select
                onChange={handleSortBy}
                value={sortBy}
            >
                <option value="-1">Trier par</option>
                <option value="title.asc">Titres(de A à Z)</option>
                <option value="title.desc">Titres(de Z à A)</option>
                <option value="popularity.desc">Popularité +/-</option>
                <option value="popularity.asc">Popularité -/+</option>
                <option value="vote_average.desc">Notes +/-</option>
                <option value="vote_average.asc">Notes -/+</option>
                <option value="primary_release_date.desc">Dates de sortie +/-</option>
                <option value="primary_release_date.asc">Dates de sortie -/+</option>
            </Select>
        </div>
    )
}

export default MovieFilter;