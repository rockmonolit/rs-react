import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formCardSlice';
import { rickApi } from '../slices/apiSlice';
import searchTextReducer from '../slices/searchTextSlice';
import searchResultsReducer from '../slices/searchResultsSlice';

export const store = configureStore({
  reducer: {
    formCards: formReducer,
    searchText: searchTextReducer,
    searchResults: searchResultsReducer,
    [rickApi.reducerPath]: rickApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
