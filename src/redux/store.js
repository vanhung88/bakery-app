import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    //product: productReducer,
    //...
  },
});

export default store;
