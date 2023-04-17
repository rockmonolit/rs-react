import { CharacterInfo } from '../types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FormCardsState {
  searchResults: CharacterInfo[];
}

const initialState: FormCardsState = {
  searchResults: [],
};

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    updateSearchResults: (state, action: PayloadAction<CharacterInfo[]>) => {
      state.searchResults = action.payload;
    },
  },
});

export const { updateSearchResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
