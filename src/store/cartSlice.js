import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   products:["Apple","Banana","Orange"],
};

const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            state.products.splice(action.payload,1);
        }
        
    }
});

export const { addProduct,removeProduct } = cartSlice.actions;
export default cartSlice.reducer;