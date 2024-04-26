import { createAsyncThunk } from "@reduxjs/toolkit";
import { textPreparator } from "../lib/textPreparator";

const url = {
    randomText: "https://random-word-api.vercel.app/api?words=",
    selected: "#"
  }

export const fetchRandomLines = createAsyncThunk(
    "text/fetchRandomLines",
    async function (_, { rejectWithValue }) {
      try {
        const response = await fetch(
          `${url.randomText}60`
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
    async function (currentTextId, {rejectWithValue}) {
      const urlID = currentTextId === '0002' ? url.randomText : url.selected
      try {
        const response = await fetch(
          `${urlID}30`
        );
  
        if (!response.ok) {
          throw new Error("Server error!");
        }
  
        const randomWords = await response.json();
  
        const newLines = textPreparator(randomWords, window.innerWidth);
        return newLines
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  )


  export const fetchNewText = createAsyncThunk(
    'text/fetchNewText',
    async function (currentTextId, {rejectWithValue}) {
      const urlID = currentTextId === '0002' ? url.randomText : url.selected
      try {
        const response = await fetch(
          `${urlID}30`
        );
  
        if (!response.ok) {
          throw new Error("Server error!");
        }
  
        const randomWords = await response.json();
  
        const newLines = textPreparator(randomWords, window.innerWidth);
        return newLines
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  )