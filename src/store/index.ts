import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./CartSlice"
import productsSlice from "./ProductsSlice"

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice
  }
})

export default store
