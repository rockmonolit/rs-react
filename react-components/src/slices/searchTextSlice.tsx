import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchBarState {
  inputValue: string;
}

const initialState: SearchBarState = {
  inputValue: '',
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    addInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { addInputValue } = searchTextSlice.actions;
export default searchTextSlice.reducer;
