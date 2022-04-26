import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axios } from 'axios';



export const getUserInfo = createAsyncThunk(
    "receipts/getUserInfo",
    async (_id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.get(`localhost:8080/customer/${_id}`);
        return res.data
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );





  



const reciptSlice = createSlice({
    name: "receipts",
    initialState: { value: true },
    reducers: {
        toggle: (state, action) => {
            state.value = !state.value
        },
       

    },
    extraReducers: {
        //get-info customer
        [getUserInfo.pending]:(state, action) => {
          console.log(action);
          state.isLoading = true;
          state.error = null;
        },
        [getUserInfo.fulfilled]: (state, action) => {
          console.log(action);
          state.isLoading = false;
          state.products = action.payload;
        },
        [getUserInfo.rejected]: (state, action) => {
          console.log(action);
          state.isLoading = false;
          state.error = action.payload;
        },
        
      },

})
export const {toggle} = reciptSlice.actions
export default reciptSlice.reducer
