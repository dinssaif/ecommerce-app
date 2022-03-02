import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productsDataSlice from "./productsDataSlice";
import userDataSlice from "./userDataSlice";

const store = configureStore({
  reducer: {
    productData: productsDataSlice,
    cart: cartSlice,
    userData: userDataSlice,
  },
});

export default store;
