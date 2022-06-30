import { Card, Img } from "./style";
const MovieItem = ({ movie }) => {
    const { original_title, poster_path, release_date } = movie;
    return (
        <>
            {/* <Image src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="Coming soon" layout='responsive' width="50px" height="50px" /> */}
            <Img src={`${process.env.NEXT_PUBLIC_PATH_IMG}${poster_path}`
            } />
            <p> {original_title}</p>
            <p>{release_date}</p>
        </>
    )
}

export default MovieItem;