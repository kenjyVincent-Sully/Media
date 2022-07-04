import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import MovieItem from "../MovieItem";
import { Movie } from "types/Movie";

const MoviesTopList: FC<{ data: Array<Movie> }> = ({ data }) => {

    return (
        <>
            <h1>Les 10 meilleurs films</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@0.75": {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    "@1.50": {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((movies: Movie, i: number) => {
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

export default MoviesTopList;