export interface ProductInfo {
  id: number
  name: string
  image: string
  description: string
  price: number
}

export interface Cart {
  cartItems: Array<ProductInfo & { quantity: number }>
  cartTotalAmount: number
  cartTotalQuantity: number
}

export interface RootState {
  products: Array<ProductInfo>
  cart: Cart
}
