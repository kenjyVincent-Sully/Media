import { API } from "./api";

export class Movie extends API {
    protected api_key: string = process.env.NEXT_PUBLIC_TMDB_MOVIE_KEY ?? '';

    constructor() {
        super(process.env.NEXT_PUBLIC_PATH_API_URI ?? '');
    }

    getBaseParams(): any {
        return {
            api_key: this.api_key,
            language: 'fr',
        }
    }
    getTopMovies(): Promise<any> {
        return this.get('/movie/top_rated', { ...this.getBaseParams(), page: 1 })
    }
    getGenres(): Promise<any> {
        return this.get('/genre/movie/list', this.getBaseParams())
    }
    getDetails(id?: number): Promise<any> {
        return this.get(`/movie/${id}`, this.getBaseParams())
    }
    getListingMoviesInfiniteScroll(page: number, genre: string, year: number, sort: string): Promise<any> {
        const genreParam = genre !== '-1' ? { with_genres: genre } : {};
        const yearParam = year !== -1 ? { primary_release_year: year } : {};
        const sortByParam = sort !== '-1' ? { sort_by: sort } : {};
        const params = {
            ...this.getBaseParams(),
            ...genreParam,
            ...yearParam,
            ...sortByParam,
        }
        return this.get('/discover/movie', params);
    }
}
