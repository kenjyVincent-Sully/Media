import { getListingMoviesInfiniteScroll } from "@api/movies";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from 'app/store';
import { FilterParams, MoviesListingState } from "types/Movie";
import { RequestStatus } from "types/Request";



const initialState: MoviesListingState = {
    filterGenre: "-1",
    filterYear: -1,
    results: [],
    dataLoaded: false,
    status: RequestStatus.idle,
}


export const getMovies = createAsyncThunk(
    "getMovies",
    async (payload: FilterParams) => {
        const response = await getListingMoviesInfiniteScroll(payload.page as number, payload.genre, payload.year);
        return response;
    }
)


export const moviesListingSlice = createSlice({
    name: "moviesListing",
    initialState,
    reducers: {
        filterGenreId: (state, action: PayloadAction<string>) => {
            state.filterGenre = action.payload;
        },
        filterYear: (state, action: PayloadAction<number>) => {
            state.filterYear = action.payload;
        },
        setInitialMoviesList: (state, action) => {
            state.results = action.payload;
            state.dataLoaded = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, state => {
                state.status = RequestStatus.loading;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.results = action.payload.results;
                state.status = RequestStatus.idle;
            })
            .addCase(getMovies.rejected, state => {
                state.status = RequestStatus.failed;
            })
    }
});

export const { filterGenreId, filterYear, setInitialMoviesList } = moviesListingSlice.actions;

export const selectFilterGenre = (state: AppState) => state.moviesListing.filterGenre;
export const selectFilterYear = (state: AppState) => state.moviesListing.filterYear;
export const selectResults = (state: AppState) => state.moviesListing.results;
export const selectDataLoaded = (state: AppState) => state.moviesListing.dataLoaded;
export const selectStatus = (state: AppState) => state.moviesListing.status;

export default moviesListingSlice.reducer;