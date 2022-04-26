import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const addFavourite = createAsyncThunk(
//   "customer/addFavourite",
//   async (customertData, thunkAPI) => {
//     console.log(customertData.selectedOfferProduct);
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const res = await axios.post(
//         `http://localhost:8080/favourite/${customertData.ownerId}`,
//         customertData
//       );
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getFavourite = createAsyncThunk(
//   "customer/addFavourite",
//   async (customertData, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const res = await axios.get(
//         `http://localhost:8080/favourite/${customertData}`
//       );
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );




export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favourite: [],
    isLoading: null,
    myFavorites: null,
    error: null,
  },

  reducers: {
    addItem: function (state, action) {
      state.favourite.push(action.payload);
      console.log(state.favourite);
    },
    removeItem: function (state, { payload }) {
      return {
        ...state,
        favourite: state.favourite.filter((item) => item !== payload),
      };
    },
  },
  extraReducers: {
    //add product to favorite
    // [addFavourite.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [addFavourite.fulfilled]: (state, action) => {
    //   console.log(action.payload);
    //   state.isLoading = false;
    //   state.favourite = action.payload;
    // },
    // [addFavourite.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    // //getfavorite
    // [getFavourite.pending]: (state, action) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [getFavourite.fulfilled]: (state, action) => {
    //   console.log(action.payload);
    //   state.isLoading = false;
    //   state.favourite = action.payload;
    // },
    // [getFavourite.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },

    
  },
});
export const { removeItem, addItem, setUser, editUser } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
