import { FC, useContext } from "react";
import {
  WrapFilter,
  LabelSelect,
  ContainerFilter,
} from "../MoviesTopList/style";
import Dropdown, { Option } from "react-dropdown";
import { Genre } from "types/Movie";
import { FiltersContext } from "context/FiltersContext";

const getFilteryears = () => {
  let startYear = 1900;
  const currentYear = new Date().getFullYear();
  let arr = [];

  for (let i = currentYear; i > startYear + 1; i--) {
    arr.push(i.toString());
  }
  return arr;
};

const MovieFilter: FC<{ genres: Array<Genre> }> = ({ genres }) => {
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
  const { handleGenre, handleYear, handleSortBy } = useContext(FiltersContext);
  const defaultOption = optionsSortBy["-1"];

  const formattedData = () => {
    genres.forEach(({ id, name }) => {
      optionsGenres.push({ value: id.toString(), label: name });
    });
  };
  formattedData();

  return (
    <ContainerFilter>
      <WrapFilter>
        <LabelSelect htmlFor="sortBy">Trier par:</LabelSelect>
        <Dropdown
          options={optionsSortBy}
          onChange={(sortBy) => handleSortBy(sortBy.value)}
          value={defaultOption}
          placeholder="Trier par"
        />
      </WrapFilter>

      <WrapFilter>
        <LabelSelect>Trier par: </LabelSelect>
        <Dropdown
          options={optionsGenres}
          onChange={(genre) => handleGenre(genre.value)}
          value={defaultOption}
          placeholder="Genres"
        />

        <Dropdown
          options={optionYears}
          onChange={(year) => handleYear(parseInt(year.value))}
          value={defaultOption}
          placeholder="Année"
        />
      </WrapFilter>
    </ContainerFilter>
  );
};

export default MovieFilter;
