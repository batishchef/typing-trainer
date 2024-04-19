import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { inititaLinesArr } from "../../assets/texts/texts";
import { changeCurrentText } from "../../functions/changeCurrentText";
import { textPreparator } from "../../functions/textPreparator";

export const fetchRandomLines = createAsyncThunk(
  "text/fetchRandomLines",
  async function () {
    const response = await fetch(
      "https://random-word-api.vercel.app/api?words=60"
    );
    const randomWords = await response.json();
    return textPreparator(randomWords, window.innerWidth);
  }
);

const initialState = {
  textOptions: ["theGift", "lorem", "random"],

  currentText: {
    textBody: inititaLinesArr,
    textHeader: "theGift",
  },

  otherTexts: {
    randomText: {
      textBody: [],
      textHeader: "random",
      status: null,
      error: null,
    },
  },
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    changeText: (state, action) => {
      const newText = changeCurrentText(action.payload);
      console.log(newText);

      state.currentText = { ...newText };
    },
    changeToRandom: (state) => {
      state.currentText = state.otherTexts.randomText;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomLines.pending, (state) => {
        state.otherTexts.randomText.status = "loading";
        state.otherTexts.randomText.error = null;
      })

      .addCase(fetchRandomLines.fulfilled, (state, action) => {
        state.otherTexts.randomText.status = 'resolved'
        state.otherTexts.randomText.textBody = action.payload
      })

      // .addCase(fetchRandomLines.rejected, (state, action) => {
      //   state.otherTexts.randomText.status = 'error'
      //   state.otherTexts.randomText.textBody = action.payload
      // })

      // .addMatcher(
      //   isRejectedAction,
      //   // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
      //   (state, action) => {}
      // )
      // // and provide a default case if no other handlers matched
      // .addDefaultCase((state, action) => {});
  },

  // {
  //   [fetchRandomLines.pending]: (state) => {

  //   },
  //   [fetchRandomLines.fulfilled]: (state, action) => {

  //   },
  //   [fetchRandomLines.rejected]: (state, action) => {},
  // },
});

export const { changeText, changeToRandom, resetIsUpdated } = textSlice.actions;

export default textSlice.reducer;
