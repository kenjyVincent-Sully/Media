import { API } from "./api";
export class Search extends API{
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
    getSearchResults(keywords: string): Promise<any> {
        const query = keywords !== '-1' ? { query: keywords } : {};
        const params = {
            ...this.getBaseParams(),
            ...query,
        }
       
        return this.get(`/search/movie`, params);
    }
    getSearchResultsInfiniteScroll(keywords: string | string[], page: number): Promise<any> {
        const query = keywords !== '-1' ? { query: keywords } : {};
        const pages = page !== 1 ? { page: page } : {};
        
        const params = {
            ...this.getBaseParams(),
            ...query,
            ...pages,
        }

        return this.get(`/search/movie`, params);
    }
}
