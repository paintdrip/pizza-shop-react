import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    test: (state) => {
      state.count += 555;
    },
  },
});

export const { increment, decrement, incrementByAmount, test } =
  counterSlice.actions;

export default counterSlice.reducer;
