import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import moviesListingReducer from '@features/moviesListing/MoviesListingSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            moviesListing: moviesListingReducer,
        }
    });
};

const store = makeStore();

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export default store;