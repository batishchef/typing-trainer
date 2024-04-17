import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { textPreparator } from "../../functions/textPreparator";
import { texts } from "../../assets/texts/texts";

const fetchListOfTextHeaders = createAsyncThunk();

const preparedText = textPreparator(
  texts["theGift"]["textBody"],
  window.innerWidth
);

const initialState = {
  value: {
    textBody: preparedText,
    textHeader: "Набоков - Дар",
    listOfTextHeaders: [],
  },
};

console.log(initialState);

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    // updateText: (state, action) => {
    //   state.value = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchListOfTextHeaders.fulfilled, (state, action) => {
      state.value.listOfTextHeaders = action.payload;
    });
  },
});

export const { updateText } = textSlice.actions;

export default textSlice.reducer;
