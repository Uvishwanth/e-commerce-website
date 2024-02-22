
import { createSlice } from "@reduxjs/toolkit";

const individualSlice = createSlice({
    name: 'individualItem',
    initialState: {
        item: []
    },
    reducers: {
        addItem: (state, action) => {            
            state.item=[]
            action.payload.forEach(item =>
                state.item.push(item))

        },
        searchItem: (state, action) => {
            const { id } = action.payload
            const displayItem = state.item.find(x => x.id === id)
            if (displayItem) {
                state.item = displayItem
            }
        }
    }
})

export default individualSlice.reducer;
export const { addItem, searchItem } = individualSlice.actions
