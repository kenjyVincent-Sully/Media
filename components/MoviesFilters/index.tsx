import { InferProps } from "prop-types";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import {
    selectFilterGenre, filterGenreId,
    getMovies, selectFilterYear, filterYear, setSortBy, selectSortBy
} from "@features/moviesListing/MoviesListingSlice";
import { WrapFilter, LabelSelect, ContainerFilter } from "../MoviesTopList/style";
import Dropdown, { Option } from 'react-dropdown';
import { Genre } from "types/Movie";

const getFilteryears = () => {
    let startYear = 1900;
    const currentYear = new Date().getFullYear();
    let arr = [];

    for (let i = currentYear; i > startYear + 1; i--) {
        arr.push(i.toString());
    }
    return arr;
}


const MovieFilter: FC<{ genres: Array<Genre> }> = ({ genres }) => {
    const dispatch = useAppDispatch();
    const filteredGenre = useAppSelector(selectFilterGenre);
    const filteredYear = useAppSelector(selectFilterYear);
    const sortBy = useAppSelector(selectSortBy);
    const optionYears = getFilteryears();
    const optionsGenres: Array<Option> = [];
    const optionsSortBy = [
        { value: "title.asc", label: "Titres(de A à Z)" },
        { value: "title.desc", label: "Titres(de Z à A)" },
        { value: "popularity.asc", label: "Popularité +/-" },
        { value: "popularity.des", label: "Popularité -/+" },
        { value: "vote_average.asc", label: "Notes +/-" },
        { value: "vote_average.desc", label: "Notes -/+" },
        { value: "primary_release_date.asc", label: "Dates de sortie +/-" },
        { value: "primary_release_date.desc", label: "Dates de sortie -/+" },
    ];

    const defaultOption = optionsSortBy["-1"];

    const formattedData = () => {
        genres.forEach(genre => {
            optionsGenres.push({ value: genre.id.toString(), label: genre.name });
        });
    }
    formattedData();

    const handleFilterGenre = (arg: Option) => {

        const selectedGenre = arg.value;
        console.log(selectedGenre);

        dispatch(filterGenreId(selectedGenre));

        dispatch(getMovies({
            genre: selectedGenre,
            year: filteredYear,
            sortBy: sortBy,
        }));
    }

    const handleFilterYear = (arg: Option) => {
        const selectYear = arg.value;

        dispatch(filterYear(parseInt(selectYear, 10)));

        dispatch(getMovies({
            year: parseInt(selectYear, 10),
            genre: filteredGenre,
            sortBy: sortBy,
        }));
    }

    const handleSortBy = (arg: Option) => {
        const sortByValue = arg.value;

        dispatch(setSortBy(sortByValue));

        dispatch(getMovies({
            sortBy: sortByValue,
            year: filteredYear,
            genre: filteredGenre,

        }));
    }

    return (
        <ContainerFilter>
            <WrapFilter>
                <LabelSelect htmlFor="sortBy">Trier par:</LabelSelect>
                <Dropdown
                    options={optionsSortBy}
                    onChange={handleSortBy}
                    value={defaultOption}
                    placeholder="Trier par"
                />
            </WrapFilter>

            <WrapFilter>


                <LabelSelect>Trier par:  </LabelSelect>
                <Dropdown
                    options={optionsGenres}
                    onChange={handleFilterGenre}
                    value={defaultOption}
                    placeholder="Genres"
                />

                <Dropdown
                    options={optionYears}
                    onChange={handleFilterYear}
                    value={defaultOption}
                    placeholder="Année"
                />
            </WrapFilter>
        </ContainerFilter>
    )
}

export default MovieFilter;