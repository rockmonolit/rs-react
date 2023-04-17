import { FormCardProps } from '../types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FormCardsState {
  formCards: FormCardProps[];
}

const initialState: FormCardsState = {
  formCards: [],
};

export const formCardSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormCard: (state, action: PayloadAction<FormCardProps>) => {
      state.formCards = [...state.formCards, action.payload];
    },
  },
});

export const { addFormCard } = formCardSlice.actions;
export default formCardSlice.reducer;
