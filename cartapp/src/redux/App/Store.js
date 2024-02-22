
import {configureStore} from '@reduxjs/toolkit'
import productSlice from '../Features/prodSlice'
import cartSlice from '../Features/cartSlice';
import individualSlice from '../Features/individualItem';

const store =configureStore({
    reducer:{
        products: productSlice,
        cart: cartSlice,
        individualItem: individualSlice
    }
})

export default store;
