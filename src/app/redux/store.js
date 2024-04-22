import { configureStore } from "@reduxjs/toolkit";
import text from "./textSlice/textSlice";
import typingSpeed from "../../features/mainTextField/model/typingSpeedSlice";

export const store = configureStore({
  reducer: {
    text: text,
    typingSpeed: typingSpeed,
  },
});
