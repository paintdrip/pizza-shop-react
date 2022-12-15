import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
	const { sortBy, order, category, search, currentPage } = params;
	const { data } = await axios.get(
		`https://635fe9e43e8f65f283bed842.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
	);
	return data;
});

const initialState = {
	items: [],
	status: 'loading', // loading | success | error
};

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		},
	},

	extraReducers: {
		[fetchPizzas.pending]: (state) => {
			state.status = 'loading';
			state.items = [];
		},
		[fetchPizzas.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = 'success';
		},
		[fetchPizzas.rejected]: (state, action) => {
			state.status = 'error';
			state.items = [];
		},
	},
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
