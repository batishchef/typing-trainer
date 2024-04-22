import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    charactersPerMin: 0,
    wordsPerMin: 0,
    countLines: 0,
    averageCharactersPerMin: {
      sum: 0,
      value: 0,
    },
    averageWordsPerMin: {
      sum: 0,
      value: 0,
    },
  },
  counter: {
    startLine: 0,
    endLine: 0,
  },
};

export const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState,
  reducers: {
    updatePerMin: (state, action) => {
      const charactersPerMin = action.payload.charactersPerMin;
      const wordsPerMin = action.payload.wordsPerMin;
      const averageCharactersPerMinSum = state.value.averageCharactersPerMin.sum + charactersPerMin;
      const averageWordsPerMinSum = state.value.averageWordsPerMin.sum + wordsPerMin;
      const countLines = state.value.countLines + 1;
      console.log(countLines)

      state.value.charactersPerMin = charactersPerMin;
      state.value.wordsPerMin = wordsPerMin;
      state.value.countLines = countLines;

      state.value.averageCharactersPerMin = {
        sum: averageCharactersPerMinSum,
        value: Math.round(averageCharactersPerMinSum / countLines),
      };
      state.value.averageWordsPerMin = {
        sum: averageWordsPerMinSum,
        value: Math.round(averageWordsPerMinSum / countLines),
      };
    },
  },
});

export const { updatePerMin, updateCounter } = typingSpeedSlice.actions;

export default typingSpeedSlice.reducer;
