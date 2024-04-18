import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { linesArr } from "../../assets/texts/texts";
import { changeCurrentText } from "../../functions/changeCurrentText";

const fetchListOfTextHeaders = createAsyncThunk();

const initialState = {
  currentText: {
    textBody: linesArr,
    textHeader: "theGift",
  },
  textOptions: ['theGift','lorem'],
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    changeText: (state, action) => {
      const newText = changeCurrentText(action.payload)
      console.log(newText)

      state.currentText = {...newText}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchListOfTextHeaders.fulfilled, (state, action) => {
      state.currentText.listOfTextHeaders = action.payload;
    });
  },
});

export const { changeText, resetIsUpdated } = textSlice.actions;

export default textSlice.reducer;
