import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slices/formCardSlice'

export const store = configureStore({
    reducer: {
        formCards: formReducer,
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
