import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    charactersPerMin: 0,
    wordsPerMin: 0,
    averageCharactersPerMin: 0,
    averageWordsPerMin: 0,
  },
};

export const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState,
  reducers: {
    updatePerMin: (state, action) => {
      state.value.charactersPerMin = action.payload.charactersPerMin;
      state.value.wordsPerMin = action.payload.wordsPerMin;
    },
  },
});

export const { updatePerMin } = typingSpeedSlice.actions;

export default typingSpeedSlice.reducer;
