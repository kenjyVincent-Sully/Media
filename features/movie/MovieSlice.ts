import { getMoviesList } from "@api/movies";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from 'app/store';
import { FilterParams, MovieState } from "types/Movie";
import { RequestStatus } from "types/Request";



const initialState: MovieState = {
    filterId: -1,
    results: [],
    dataLoaded: false,
    status: RequestStatus.idle,
}


export const getMovies = createAsyncThunk(
    "getMovies",
    async (payload: FilterParams) => {
        const response = await getMoviesList(payload);

        return response;
    }
)

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        changeFilter: (state, action: PayloadAction<number>) => {
            state.filterId = action.payload;
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
                state.dataLoaded = true;
            })
            .addCase(getMovies.rejected, state => {
                state.status = RequestStatus.failed;
            })
    }
});

export const { changeFilter } = movieSlice.actions;

export const selectFilterId = (state: AppState) => state.movie.filterId;
export const selectResults = (state: AppState) => state.movie.results;
export const selectDataLoaded = (state: AppState) => state.movie.dataLoaded;
export const selectStatus = (state: AppState) => state.movie.status;

export default movieSlice.reducer;