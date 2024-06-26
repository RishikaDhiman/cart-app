import { createSlice, nanoid } from "@reduxjs/toolkit"; 

const initialState = [];
// console.log(initialState);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action){
            state.push(action.payload)
        }
    }
})

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;