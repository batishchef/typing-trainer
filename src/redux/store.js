import { configureStore } from "@reduxjs/toolkit";
import written from "./slices/writtenSlice";
import text from "./slices/textSlice";
import typingSpeed from "./slices/typingSpeedSlice";

export const store = configureStore({
  reducer: {
    written: written,
    text: text,
    typingSpeed: typingSpeed,
  },
});
