// import { configureStore } from "@reduxjs/toolkit";
// import { CartSlice } from "./Slices/CartSlice";


// export const store = configureStore({
//     reducer:{
//         cart: CartSlice,
//     }
// });
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice"; // Default import

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the reducer from the CartSlice
  },
});
