import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    
    filteredCategoryProducts:[],
    filteredPriceProducts:[]
  };
  
export const productFilterSlice = createSlice({
 name:"productFilter",
 initialState,
 reducers:{
    setFilteredProduct:(state, action)=>{
        console.log(action.payload)
        state.filteredCategoryProducts = action.payload
      },
      setFiltredPrice:(state, action)=>{
        console.log(action.payload)
        state.filteredPriceProducts = action.payload
      }
 }
})


export const { setFilteredProduct, setFiltredPrice} = productFilterSlice.actions
export default productFilterSlice.reducer