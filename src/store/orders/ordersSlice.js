import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOrders = createAsyncThunk(
    'order/getOrders',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get('http://localhost:8080/orders');
            console.log("from get ", res.data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const insertOrder = createAsyncThunk(
    'order/insertOrder',
    async (orderData, thunkAPI) => {
        console.log(orderData)
        console.log(orderData)
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.post('http://localhost:8080/orders', orderData);
            console.log("from insert ", res.data.data);
            return res.data.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteOrder = createAsyncThunk(
    'order/deleteOrder',
    async (_id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.delete(`http://localhost:8080/orders/${_id}`);
            return _id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const editOrder = createAsyncThunk(
    'order/editOrder',
    async (orderData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.put(
                `http://localhost:8080/orders/${orderData.id}`,
                orderData.formData
            );
            console.log(res.data);
            return res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    orders: null,
    isLoading: false,
    isConfirmed:false,
    error: null,
    orderInfo: null,
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {

    },
    extraReducers: {
        //get Discounts
        [getOrders.pending]: (state, action) => {
            console.log(action);
            state.isLoading = true;
            state.error = null;
        },
        [getOrders.fulfilled]: (state, action) => {
            console.log("from get fulfield", action.payload);
            state.isLoading = false;
            state.orders = action.payload;
        },
        [getOrders.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.error = action.payload;
        },
        //insert Discounts
        [insertOrder.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [insertOrder.fulfilled]: (state, action) => {
            console.log("from insert fulfield", action.payload);
            state.isLoading = false;
            state.error = null;
            state.orders = action.payload;
        },
        [insertOrder.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //delete product
        [deleteOrder.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteOrder.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.orders = state.orders.filter((el) => el._id !== action.payload);
        },
        [deleteOrder.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //Edit product
        [editOrder.pending]: (state, action) => {
            console.log(action.payload);
            state.isLoading = true;
            state.error = null;
        },
        [editOrder.fulfilled]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
        },
        [editOrder.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default orderSlice.reducer;
