import { InferProps } from "prop-types";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectFilterId, changeFilter, getMovies } from "@features/movie/MovieSlice";

const MovieFilter = ({ genres }) => {
    const dispatch = useAppDispatch();
    const filterId = useAppSelector(selectFilterId);

    const handleFilterGenre = (e) => {

        const selectedGenre = e.target.value;
        dispatch(changeFilter(parseInt(selectedGenre, 10)));

        dispatch(getMovies({
            genre: selectedGenre
        }));
    }

    return (
        <div>
            <select
                onChange={handleFilterGenre}
                value={filterId}
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
        </div>
    )
}

export default MovieFilter;