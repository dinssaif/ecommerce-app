import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [], state: null },
  reducers: {
    setCart(state, actions) {
      state.data = state.data.find((el) => actions.payload.id === el.id)
        ? [
            ...state.data.filter((ele) => ele.id !== actions.payload.id),
            actions.payload,
          ]
        : (state.data = [...state.data, actions.payload]);
      state.state = state.state + 1;
    },
    removeCart(state, actions) {
      state.data = state.data.filter((ele) => ele.id !== actions.payload);
    },
  },
});

export const { setCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
