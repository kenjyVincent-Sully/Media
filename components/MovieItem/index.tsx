import { FC } from "react";
import { Year, Img, Item, TitleMovie } from "../MoviesTopList/style";
import type { Movie } from 'types/Movie';

const MovieItem: FC<{ movie: Movie }> = ({ movie }) => {
    const { original_title, poster_path, release_date, title, id, backdrop_path } = movie;
    const date = new Date(`${release_date}`);
    const img = poster_path !== null ? `${process.env.NEXT_PUBLIC_PATH_IMG}${poster_path}` : "./img/no-movie-img.jpg";

    return (
        <Item>
            <Img src={img} alt={`${original_title} ` || ` ${title}`} />
            <TitleMovie>{title || original_title}</TitleMovie>
            <Year>{date.getFullYear()}</Year>

        </Item>
    )
}

export default MovieItem;