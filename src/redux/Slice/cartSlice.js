import { db } from "../../firebase/config";
const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    name: "hung",
  },
  reducers: {
    addToCart: (state, action) => {
      db.collection("cart").add({
        describe: action.payload.describe,
        price: action.payload.price,
        id: action.payload.id,
        amount: action.payload.amount,
        image: action.payload.image,
      });
      return state;
    },

    remove:(state,action)=>{
      
    }
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
