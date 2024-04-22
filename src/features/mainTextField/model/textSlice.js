import { createSlice } from "@reduxjs/toolkit";
import { inititaLinesArr } from "../../../shared/texts/texts";
// import { changeCurrentText } from "./lib/changeCurrentText";
import { fetchRandomLines, fetchAddLines } from "../../../shared/api/api";

const initialState = {
  textOptions: ["theGift", "lorem", "randomText"],
  currentTextHeader: "theGift",
  isTextChanged: false,

  theGift: {
    textID: "0001",
    textHeader: "theGift",
    textBody: inititaLinesArr,
    currentLine: 0,
    status: null,
    error: null,
    needUpdated: false,
  },

  randomText: {
    textID: "0003",
    textHeader: "randomText",
    textBody: [],
    currentLine: 0,
    status: null,
    error: null,
    needUpdated: false,
  },
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    updateLine: (state, action) => {
      const currentTextHeader = action.payload;

      state[currentTextHeader].currentLine += 1;
      if (state[currentTextHeader].currentLine === 2) {
        state[currentTextHeader].needUpdated = true;
      }
    },

    changeText: (state, action) => {
      const newText = action.payload;
      state.currentTextHeader = newText;
      state.isTextChanged = true;
    },

    resetIsTextChanged: (state) => {
      state.isTextChanged = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomLines.pending, (state) => {
        state.randomText.status = "loading";
        state.randomText.error = null;
      })

      .addCase(fetchRandomLines.fulfilled, (state, action) => {
        state.randomText.textBody = action.payload;
      })

      .addCase(fetchRandomLines.rejected, (state, action) => {
        state.randomText.status = "rejected";
        state.randomText.error = action.payload;
      })

      .addCase(fetchAddLines.fulfilled, (state, action) => {
        const currentTextHeader = action.header;

        state[currentTextHeader].textBody = action.payload;
        state[currentTextHeader].currentLine = 0;
        state[currentTextHeader].needUpdated = false;
      });
  },
});

export const { updateLine, changeText, resetIsUpdated, resetIsTextChanged } = textSlice.actions;

export default textSlice.reducer;
