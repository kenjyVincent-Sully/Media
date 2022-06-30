import { Card, Img } from "./style";
const MovieItem = ({ movie }) => {

    const { original_title, poster_path, release_date, title } = movie;

    return (
        <>
            <Img src={`${process.env.NEXT_PUBLIC_PATH_IMG}${poster_path}`} alt={`${original_title} ` || ` ${title}`} />
            <p>{title || original_title}</p>
            <p>{release_date}</p>
        </>
    )
}

export default MovieItem;