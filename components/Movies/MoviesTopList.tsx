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
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
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