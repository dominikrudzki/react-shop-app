export interface ProductInfo {
  name: string,
  image: string,
  description: string,
  price: number
}

export interface Cart {
  cartItems: Array<ProductInfo>
  cartTotalAmount: number
  cartTotalQuantity: number
}

export interface RootState {
  cart: Cart
}
