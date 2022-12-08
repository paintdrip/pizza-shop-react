import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// addProduct(state, action) {
		// 	state.items.push(action.payload);
		// 	state.totalPrice = state.items.reduce((sum, obj) => {
		// 		return obj.price + sum;
		// 	}, 0);
		// },
		addProduct(state, action) {
			const findProduct = state.items.find((obj) => obj.id == action.payload.id);

			if (findProduct) {
				findProduct.count++;
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				});
			}
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price * obj.count + sum;
			}, 0);
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
