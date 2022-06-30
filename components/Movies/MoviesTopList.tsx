import { InferProps } from "prop-types";
import { FC } from "react";
import { DataMoviePropsTypes } from "types/Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import MovieItem from "./MovieItem";

const MoviesTopList: FC = ({ data }: InferProps<typeof MoviesTopList.propTypes>) => {

    return (
        <>
            <h1>Les 10 meilleurs films</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {data.map((movies: object, i: number) => {
                    return (
                        <SwiperSlide key={i}>
                            <MovieItem movie={movies} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>

    )
}

MoviesTopList.propTypes = {
    data: DataMoviePropsTypes,
};


export default MoviesTopList;