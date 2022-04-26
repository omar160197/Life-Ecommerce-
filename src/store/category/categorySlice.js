import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk(
  'category/getCategories',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get('http://localhost:8080/Category');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
    categories: null,
    isLoading: false,
    error: null,
  };
  
  export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: {
      //get-products
      [getCategories.pending]: (state, action) => {
        console.log(action);
        state.isLoading = true;
        state.error = null;
      },
      [getCategories.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.categories = action.payload;
      },
      [getCategories.rejected]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = action.payload;
      }
    }
})
    
export default categorySlice.reducer;