import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getDiscounts = createAsyncThunk(
  "discounts/getDiscounts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("http://localhost:8080/discounts")
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductsInDiscount = createAsyncThunk(
    "discounts/getProductsInDiscount",
    async (_id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.get("http://localhost:8080/products");
         
        return res.data.filter((el)=>{
         return el.discount._id === _id
        });
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const selectProduct = createAsyncThunk(
    "discounts/selectProduct",
    async (_id, thunkAPI) => {
      const { rejectWithValue } = thunkAPI;
      try {
        const res = await axios.get(`http://localhost:8080/products/${_id}`);
        //  return console.log(_id);
        return res.data
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );




const initialState = {
  discounts: null,
  productsInDiscount:null,
  selectedOfferProduct:null,
  oneDiscount:null,
  isLoading: false,
  error: null,
};

export const discountSlice = createSlice({
  name: "discounts",
  initialState,

reducers:{
setDiscountId:function(state,{payload}){
state.oneDiscount=payload
},
},

  extraReducers: {
    //get-discounts
    [getDiscounts.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.error = null;
    },

    [getDiscounts.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.discounts = action.payload;
    },

    [getDiscounts.rejected]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = action.payload;
      },

// select All products in-discount
[getProductsInDiscount.pending]: (state, action) => {
    console.log(action);
    state.isLoading = true;
    state.error = null;
  },

  [getProductsInDiscount.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.productsInDiscount = action.payload;
  },

  [getProductsInDiscount.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
    
 //select one product in discount
 [selectProduct.pending]: (state, action) => {
    console.log(action);
    state.isLoading = true;
    state.error = null;
  },

  [selectProduct.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.selectedOfferProduct = action.payload;
  },

  [selectProduct.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },

  },
});


export const {setDiscountId} = discountSlice.actions

export default discountSlice.reducer;