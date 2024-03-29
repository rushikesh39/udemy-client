import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsInCart: [],
    totalAmount: 0,
}
const calculateTotalAmount = (itemsInCart) => {
    return itemsInCart.reduce((total, item) => total + item.offerPrice * item.quantity, 0);
}
const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addtocart: (state, action) => {
            // console.log("cart item", action.payload);
            const existingItemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                alert("Item: " + action.payload.topic + " is already added to the cart!");
            }
            else {
                state.itemsInCart.push({ ...action.payload, quantity: 1 });
                alert("Item: " + action.payload.topic + " added successfully!");
            }
            state.totalAmount = calculateTotalAmount(state.itemsInCart);
            console.log(Array.from(state.itemsInCart));
            console.log(state.totalAmount);
        },
        deleteItem: (state, action) => {
            const existingItemIndex = state.itemsInCart.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                state.itemsInCart.splice(existingItemIndex, 1);
                state.totalAmount = calculateTotalAmount(state.itemsInCart);
            }
        },
        resetCart: (state) => {
            state.itemsInCart = [];
            state.totalAmount = 0;
        },
    }
})

export const { addtocart, deleteItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;