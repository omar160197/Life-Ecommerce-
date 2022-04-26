import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import productSlice from './product/productSlice';
import  authReducer  from './auth/authSlice';
import favouriteSlice from './favourite/favouriteSlice';
import discountSlice from './offers/offersSlice';
import authProductSlice from './cart/authProductCart'
import authProductCart from './cart/authProductCart';
import categorySlice from './category/categorySlice';
import reciptSlice from "./receipts/receiptSlice"
import userSlice  from './user/userSlice';


export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products:productSlice,
    auth:authReducer,
    favourite:favouriteSlice,
    discounts: discountSlice,
    customer:userSlice,

    // auth:authProductCart,
    categories: categorySlice,
    reciptSlice


  },
});
