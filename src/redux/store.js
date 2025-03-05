import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "./memeSlice"; // Adjusted import

const store = configureStore({
  reducer: {
    memes: memeReducer,
  },
});

export default store;
