import { configureStore } from "@reduxjs/toolkit";
import text from "../../features/typingField/model/textSlice";
import typingSpeed from "../../features/typingField/model/typingSpeedSlice";

export const store = configureStore({
  reducer: {
    text: text,
    typingSpeed: typingSpeed,
  },
});
