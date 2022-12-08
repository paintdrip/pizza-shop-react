import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct(state, action) {
			state.items.push(action.payload);
		},
		removeProduct(state, action) {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
		},
		clearProducts(state) {
			state.items = [];
		},
	},
});

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions;

export default cartSlice.reducer;
