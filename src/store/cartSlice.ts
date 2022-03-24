import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cart, ProductInfo } from "../types"

const initialState: Cart = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0 // money
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInfo>) => {
      return {
        cartItems: [...state.cartItems, action.payload],
        cartTotalQuantity: state.cartTotalQuantity + 1,
        cartTotalAmount: state.cartTotalAmount + action.payload.price
      }
    },
    deleteFromCart: (state, action) => {
    }
  }
})

export const {addToCart, deleteFromCart} = cartSlice.actions

export default cartSlice.reducer
