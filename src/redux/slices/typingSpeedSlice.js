import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    charactersPerMin: 0,
    wordsPerMin: 0,
    countLines: 0,
    averageCharactersPerMin: {
      sum: 0,
      value: 0
    },
    averageWordsPerMin: {
      sum: 0,
      value: 0
    },
  },
  counter: {
    startLine: 0,
    endLine: 0
  }
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
      state.value.countLines += 1
      
      state.value.averageCharactersPerMin = {
        sum: averageCharactersPerMin.sum + charactersPerMin,
        value: averageCharactersPerMin.sum / state.value.countLines
      };
      state.value.averageWordsPerMin = {
        sum: averageWordsPerMin.sum + wordsPerMin,
        value: averageWordsPerMin.sum / state.value.countLines
      };
    },
  },
});

export const { updatePerMin, updateCounter } = typingSpeedSlice.actions;

export default typingSpeedSlice.reducer;
