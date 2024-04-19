import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    charactersPerMin: 0,
    wordsPerMin: 0,
    averageCharactersPerMin: {
      sum: 0,
      lines: 0,
      value: 0
    },
    averageWordsPerMin: {
      sum: 0,
      lines: 0,
      value: 0
    },
  },
};

export const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState,
  reducers: {
    updatePerMin: (state, action) => {
      const charactersPerMin = action.payload.charactersPerMin
      const wordsPerMin = action.payload.wordsPerMin
      const averageCharactersPerMin = state.value.averageCharactersPerMin
      const averageWordsPerMin = state.value.averageWordsPerMin

      state.value.charactersPerMin = charactersPerMin
      state.value.wordsPerMin = wordsPerMin
      
      state.value.averageCharactersPerMin = {
        sum: averageCharactersPerMin.sum + charactersPerMin,
        lines: averageCharactersPerMin.lines += 1,
        value: averageCharactersPerMin.sum / averageCharactersPerMin.lines
      };
      state.value.averageWordsPerMin = {
        sum: averageWordsPerMin.sum + wordsPerMin,
        lines: averageWordsPerMin.lines += 1,
        value: averageWordsPerMin.sum / averageWordsPerMin.lines
      };
    },
  },
});

export const { updatePerMin } = typingSpeedSlice.actions;

export default typingSpeedSlice.reducer;
