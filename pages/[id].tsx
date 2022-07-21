import { FC, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import styles from "@styles/Home.module.css";
import { Movie } from 'types/Movie';
import { Movie as MovieAPI } from '@api/movies';
import { Paraph, Img, ContainerText, TitleMovie, Container, ContentImg, Head, Vote } from "../styles/detail";


const Detail: FC = () => {

    const router = useRouter();
    const [results, setResults] = useState<Movie | undefined>();
    const id = parseInt(router.query.id as string, 10);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);


    const initMovieDetails = useCallback(() => {
        new MovieAPI().getDetails(id).then(results => {
            setResults(results);
            setIsLoaded(true);
        })
            .catch(err => setError(err));
    }, [id]
    );

    useEffect(() => {
        if (!isNaN(id)) {
            initMovieDetails();
        }
    }, [id, initMovieDetails]);

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    const { poster_path, original_title, release_date, title, vote_average, overview } = results as Movie;
    const date = new Date(`${release_date}`);
    const img = poster_path !== null ? `${process.env.NEXT_PUBLIC_PATH_IMG}${poster_path}` : "./img/no-movie-img.jpg";

    return (
        <div className={styles.container}>
            <Container>
                <ContentImg>
                    <Img src={img} alt={`${original_title} ` || ` ${title}`} loading="lazy" />
                </ContentImg>

                <ContainerText>
                    <Head>
                        <TitleMovie>{title || original_title}</TitleMovie>
                        <Vote>{vote_average}</Vote>
                    </Head>
                    <Paraph>{overview}</Paraph>
                    <Paraph>{date.getFullYear()}</Paraph>

                </ContainerText>

            </Container>
        </div>
    )
}

export default Detail;