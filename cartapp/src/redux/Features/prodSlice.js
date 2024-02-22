import { createAsyncThunk } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

//initial state

const initialState={
    status: '',
    data: [],
    error:''
}

// creating Asyncn thunk action for productSlice

const API= 'https://fakestoreapi.com/products'

export const fetchProducts= createAsyncThunk('product/fetchProduct', async ()=>{
    try{
        const response= await axios.get(API)
        return response.data 
    }
    catch(error){
        throw error
    }
})

// product slice

const productSlice= createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.status= 'loading'
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status= 'fulfilled'
            state.data= action.payload
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status = 'rejected'
            state.error= action.error.message
        })
        .addDefaultCase((state,action)=>{
            return state
        })
    } 
})

export default productSlice.reducer;
