import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { inititaLinesArr } from "../../assets/texts/texts";
import { changeCurrentText } from "../../functions/changeCurrentText";
import { textPreparator } from "../../functions/textPreparator";

const url = {
  random: "https://random-word-api.vercel.app/api?words="
}

export const fetchRandomLines = createAsyncThunk(
  "text/fetchRandomLines",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        `${url.random}60`
      );

      if (!response.ok) {
        throw new Error("Server error!");
      }

      const randomWords = await response.json();

      return textPreparator(randomWords, window.innerWidth);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAddLines = createAsyncThunk(
  'text/fetchAddLines',
  async function (remainLines, {rejectWithValue}) {
    try {
      const response = await fetch(
        `${url.random}30`
      );

      if (!response.ok) {
        throw new Error("Server error!");
      }

      const randomWords = await response.json();

      const newLines = textPreparator(randomWords, window.innerWidth);
      return [...remainLines, ...newLines]
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

const initialState = {
  textOptions: ["theGift", "lorem", "random"],

  currentText: {
    textID: '0001',
    textHeader: "theGift",
    textBody: inititaLinesArr,
    currentLine: 0,
    status: null,
    error: null,
    needUpdated: false
  },

  otherTexts: {
    randomText: {
      textID: '0003',
      textHeader: "random",
      textBody: [],
      currentLine: 0,
      status: null,
      error: null,
    },
  },
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    updateLine: (state) => {
      state.currentText.currentLine += 1
      if(state.currentText.currentLine === 2) {
        state.currentText.needUpdated = true
      }
    },
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
        state.otherTexts.randomText.textBody = action.payload;
      })

      .addCase(fetchRandomLines.rejected, (state, action) => {
        state.otherTexts.randomText.status = "rejected";
        state.otherTexts.randomText.error = action.payload;
      })

      .addCase(fetchAddLines.fulfilled, (state, action) => {
        state.currentText.textBody = action.payload
        state.currentText.currentLine = 0
        state.currentText.needUpdated = false
      })
  },
});

export const { updateLine, changeText, changeToRandom, resetIsUpdated } = textSlice.actions;

export default textSlice.reducer;
