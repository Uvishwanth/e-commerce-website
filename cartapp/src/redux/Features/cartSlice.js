
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addCart: (state, action) => {
            const newItem = action.payload
            const exsistingItem = state.cart.find(item => item.id === newItem.id)
            if (exsistingItem) {
                exsistingItem.count = exsistingItem.count + 1
            } else {
                state.cart.push({ ...newItem, count: 1 })
            }
        },

        removeItem: (state, action) => {
            state.cart = state.cart.filter(x => x.id !== action.payload.id)
        },

        addCount: (state, action) => {
            const { id } = action.payload
            const incrementItem = state.cart.find(item => item.id === id)
            if (incrementItem) {
                incrementItem.count += 1
            }
        },

        decrementCount: (state, action) => {
            const { id } = action.payload
            const decrementItem = state.cart.find(item => item.id === id)
            if (decrementItem && decrementItem.count > 0) {
                decrementItem.count -= 1
            }
        },

    }

})

export default cartSlice.reducer

export const { addCart, removeItem, addCount, decrementCount } = cartSlice.actions;
