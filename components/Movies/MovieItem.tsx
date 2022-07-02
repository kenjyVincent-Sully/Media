import { useRouter } from 'next/router';
import { Card, Img } from "./style";
const MovieItem = ({ movie }) => {
    const router = useRouter();
    const { original_title, poster_path, release_date, title, id, backdrop_path } = movie;
    const date = new Date(`${release_date}`);

    return (
        <div
        // onClick={() => {
        //     router.push({
        //         pathname: `/${id}`,
        //     })
        // }}
        >
            <Img src={`${process.env.NEXT_PUBLIC_PATH_IMG}${poster_path}` || `${process.env.NEXT_PUBLIC_PATH_IMG} ${backdrop_path}`} alt={`${original_title} ` || ` ${title}`} />
            <p>{title || original_title}</p>
            <p>{date.getFullYear()}</p>

        </div>
    )
}

export default MovieItem;