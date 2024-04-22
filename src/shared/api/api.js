import { createAsyncThunk } from "@reduxjs/toolkit";
import { textPreparator } from "../lib/textPreparator";

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