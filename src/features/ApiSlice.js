import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  synonyms: [],
  definations: [],
  status: "idle",
  error: null,
};

const BASE_URL = "https://wordsapiv1.p.rapidapi.com/words";

export const fetchSynonyms = createAsyncThunk(
  "words/fetchSynonyms",
  async (word, { rejectWithValue }) => {
    if (!word.trim()) {
      return;
    }
    try {
      const options = {
        method: "GET",
        url: `${BASE_URL}/${word}/synonyms`,
        headers: {
          "X-RapidAPI-Key":
            "9c201b076dmsh9bd5caba53d0eb5p138352jsncdc232706d84",
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      // You can handle specific errors here
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDefinations = createAsyncThunk(
  "words/fetchDefinations",
  async (word, { rejectWithValue }) => {
    if (!word.trim()) {
      return;
    }
    try {
      const options = {
        method: "GET",
        url: `${BASE_URL}/${word}/definitions`,
        headers: {
          "X-RapidAPI-Key":
            "9c201b076dmsh9bd5caba53d0eb5p138352jsncdc232706d84",
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      // You can handle specific errors here
      return rejectWithValue(error.message);
    }
  }
);

const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSynonyms.pending, (state) => {
        state.status = "loading";
        state.error = null; // Reset error when starting to fetch
      })
      .addCase(fetchSynonyms.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.synonyms = action.payload;
      })
      .addCase(fetchSynonyms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Set error message from thunk
      })

      // Definations
      .addCase(fetchDefinations.pending, (state) => {
        state.status = "loading";
        state.error = null; // Reset error when starting to fetch
      })
      .addCase(fetchDefinations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.definations = action.payload;
      })
      .addCase(fetchDefinations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Set error message from thunk
      });
  },
});

export const selectSynonyms = (state) => state.words.synonyms; // Fixed selector name
export const selectSynonymsErr = (state) => state.words.error; // Fixed selector name
export const selectSynonymsStatus = (state) => state.words.status; // Fixed selector name
export const selectDefinations = (state) => state.words.definations; // Fixed selector name
export default wordsSlice.reducer;
