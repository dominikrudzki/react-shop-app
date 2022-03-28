import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Cart, ProductInfo } from "../types"

const initialState: Cart = localStorage.getItem("cartStorage") ? JSON.parse(localStorage.getItem("cartStorage") || "") : {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0 // money
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: Cart, action: PayloadAction<ProductInfo>) => {
      const indexOfDuplicate = state.cartItems.findIndex(item => item.id === action.payload.id)

      if (indexOfDuplicate !== -1) {
        state.cartItems[indexOfDuplicate] = {
          ...state.cartItems[indexOfDuplicate],
          quantity: state.cartItems[indexOfDuplicate].quantity + 1
        }
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1
        })
      }

      state.cartTotalQuantity += 1
      state.cartTotalAmount += action.payload.price
      localStorage.setItem("cartStorage", JSON.stringify(state))
    },
    removeFromCart: (state: Cart, action: PayloadAction<number>) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)

      state.cartTotalQuantity -= state.cartItems[itemIndex].quantity
      state.cartTotalAmount -= (state.cartItems[itemIndex].quantity * state.cartItems[itemIndex].price)
      state.cartItems.splice(itemIndex, 1)
      localStorage.setItem("cartStorage", JSON.stringify(state))
    },
    incrementProductQuantity(state: Cart, action: PayloadAction<number>) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)

      state.cartItems[itemIndex] = {
        ...state.cartItems[itemIndex],
        quantity: state.cartItems[itemIndex].quantity + 1
      }
      state.cartTotalQuantity += 1
      state.cartTotalAmount += state.cartItems[itemIndex].price
      localStorage.setItem("cartStorage", JSON.stringify(state))
    },
    decrementProductQuantity(state: Cart, action: PayloadAction<number>) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)

      state.cartItems[itemIndex] = {
        ...state.cartItems[itemIndex],
        quantity: state.cartItems[itemIndex].quantity - 1
      }
      state.cartTotalQuantity -= 1
      state.cartTotalAmount -= state.cartItems[itemIndex].price
      localStorage.setItem("cartStorage", JSON.stringify(state))
    },
    resetCartItems: () => {
      localStorage.removeItem("cartStorage")
      return {cartItems: [], cartTotalQuantity: 0, cartTotalAmount: 0}
    }
  }
})

export const {
  addToCart,
  removeFromCart,
  incrementProductQuantity,
  decrementProductQuantity,
  resetCartItems
} = cartSlice.actions

export default cartSlice.reducer
