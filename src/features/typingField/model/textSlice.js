import { createSlice } from "@reduxjs/toolkit";
import { inititaLinesArr } from "../../../shared/texts/texts";
import { fetchAddLines, fetchNewText } from "../../../shared/api/api";

const initialState = {
  textOptions: {"0001": "Набоков - Дар", "0002": "Случайные слова"},
  currentTextId: "0001",
  isTextChanged: false,
  status: "fulfilled",

  "0001": {
    textId: "0001",
    textHeader: "Набоков - Дар",
    textBody: inititaLinesArr,
    currentLine: 0,
    status: "fulfilled",
    error: null,
  },
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    updateLine: (state, action) => {
      const currentTextId = action.payload;
      state[currentTextId].currentLine += 1;
    },

    changeText: (state, action) => {
      const newId = action.payload;
      state.currentTextId = newId;
      state.isTextChanged = true;
    },

    resetIsTextChanged: (state) => {
      state.isTextChanged = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddLines.pending, (state) => {
        const currentTextId = state.currentTextId;
        state[currentTextId].status = "pending";
      })

      .addCase(fetchAddLines.fulfilled, (state, action) => {
        const currentTextId = state.currentTextId;
        const currentLine = state[currentTextId].currentLine;
        const remainLines =
          state[currentTextId].textBody.slice(currentLine);
        const newLines = action.payload;

        state[currentTextId].status = "fulfilled";
        state[currentTextId].textBody = [...remainLines, ...newLines];
        state[currentTextId].currentLine = 0;
        state[currentTextId].needUpdated = false;
      })

      .addCase(fetchAddLines.rejected, (state, action) => {
        const currentTextId = state.currentTextId;
        state[currentTextId].status = "rejected";
        state[currentTextId].error = action.payload;
      })

      .addCase(fetchNewText.pending, (state) => {
        const currentTextId = state.currentTextId;
        
        state[currentTextId] = {
          textHeader: state.textOptions[state.currentTextId],
          currentLine: 0,
          status: "pending",
          error: null,
          needUpdated: false,
        };
        state.status = "pending";
      })

      .addCase(fetchNewText.fulfilled, (state, action) => {
        const currentTextId = state.currentTextId;
        const newLines = action.payload;
        const currentText = state[currentTextId];
        
        state[currentTextId] = {
          ...currentText,
          textBody: newLines,
          status: "fulfilled",
        };
        state.status = "fulfilled";
      })

      .addCase(fetchNewText.rejected, (state, action) => {
        const currentTextId = state.currentTextId;
        const currentText = state[currentTextId];
        
        state[currentTextId] = {
          ...currentText,
          status: "rejected",
          error: action.payload,
        };
        state.status = "rejected";
      });
  },
});

export const { updateLine, changeText, resetIsUpdated, resetIsTextChanged } =
  textSlice.actions;

export default textSlice.reducer;
