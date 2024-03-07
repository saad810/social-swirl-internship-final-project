import { configureStore } from "@reduxjs/toolkit";
import wordsReducer from "../features/ApiSlice";

export const store = configureStore({
  reducer: {
    words: wordsReducer,
  },
});
