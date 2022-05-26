import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

/////////////////// favourite ////////////////////////
// export const addFavourite = createAsyncThunk(
//   "customer/addFavourite",
//   async (customertData, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     // console.log(customertData);
//     try {
//       const res = await axios.post(
//         `http://localhost:8080/favourite/${customertData.ownerId}`,
//         customertData
//       );
      
//       const data = await res.data;
//       console.log(data);
    
//       if (res.data) {
//         // console.log(res.data);
//         localStorage.setItem(
//           "localFavourite",
//           JSON.stringify(res.data.favouriteProducts)
//         );
//       }
//       return res.data[0].favouriteProducts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const addFavourite = createAsyncThunk(
  "auth/addFavourite",
  async (customertData, thunkAPI) => {
    console.log(customertData);  
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post(
        `http://localhost:8080/favourite/${customertData.ownerId}`,
        customertData
      );
      // console.log(res);
      const dataFavourites = await res.data.favouriteProducts;
      console.log(dataFavourites);
      if (dataFavourites) {
        localStorage.setItem("localFavourite", JSON.stringify(dataFavourites));
      }
      return dataFavourites;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);




export const getFavourite = createAsyncThunk(
  "auth/addFavourite",
  async (customertData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        `http://localhost:8080/favourite/${customertData}`
      );
      console.log("this from getFavourite", res.data);
      if (res.data) {
        localStorage.setItem("localFavourite", JSON.stringify(res.data));
      }
      console.log("from get", res.data[0].favouriteProducts);
      return res.data[0].favouriteProducts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFavourite = createAsyncThunk(
  "auth/deleteFavourite",
  async (customertData, thunkAPI) => {
    console.log(customertData);
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.put(
        `http://localhost:8080/favourite/${
          customertData.ownerId + "&" + customertData.productId
        }`
      );
      // console.log("this from getFavourite", res);
      if (res.data) {
        localStorage.setItem("localFavourite", JSON.stringify(res.data));
      }
      console.log(res.data.data.favouriteProducts);
      return res.data.data.favouriteProducts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
///////////////////////////////////////////////////////////

export const getUsers = createAsyncThunk(
  "auth/getUsers",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`http://localhost:8080/customer/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      localStorage.removeItem("user");
      // localStorage.removeItem('cart');
      localStorage.removeItem("localFavourite");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Register
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post("http://localhost:8080/customer", userData);
      // if (res.data) {
      //   localStorage.setItem("user", JSON.stringify(res.data));
      // }
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Login
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post("http://localhost:8080/login", userData, {
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      });
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//get user from local storage
let user = JSON.parse(localStorage.getItem("user"));
// let fav = JSON.parse(localStorage.getItem("localFavourite"));

const initialState = {
  user: user ? user : null,
  isError: null,
  isSuccess: false,
  isLoading: false,
  message: "",
  myfavourites:[],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: {
    //add product to favorite
    [addFavourite.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.isError = null;
    },
    [addFavourite.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.myfavourites = action.payload;
    },
    [addFavourite.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isError = action.payload;
    },

    //getfavorite
    [getFavourite.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = null;
    },
    [getFavourite.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.myfavourites = action.payload;
    },
    [getFavourite.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },

    //delete favorite
    [deleteFavourite.pending]: (state, action) => {

      console.log("from delete pending",action);

      state.isLoading = true;
      state.isError = null;
    },
    [deleteFavourite.fulfilled]: (state, action) => {

      console.log("from delete fulfilled",action);
      state.isLoading = false;
      // state.myfavourites = action.payload;
       state.myfavourites=action.payload
    },
    [deleteFavourite.rejected]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.isError = action.payload;
    },

    //register
    [register.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.isError = null;
    },
    [register.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isSuccess = true;
      // state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      console.log(action);
      state.user = null;
      state.myfavourites = [];
    },
    //login
    [login.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.isError = null;
    },
    [login.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      console.log(action.payload);  
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [getUsers.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      const newUser = action.payload;
      const userEdit = JSON.parse(localStorage.getItem("user"))
      userEdit.customer = newUser
      localStorage.setItem("user",JSON.stringify(userEdit)) 
      state.products = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
