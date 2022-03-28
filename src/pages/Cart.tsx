import CartProduct from "../components/CartProduct"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../types"
import { resetCartItems } from "../store/CartSlice"

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(({cart}: RootState) => cart)

  return (
    <div className="flex flex-col gap-8 lg:flex-row justify-center">
      <div className="basis-3/5">
        {cart.cartItems.length === 0 &&
          <span className="block font-semibold mx-auto text-center dark:text-neutral-100">You cart is empty!</span>}
        <ul>
          {cart.cartItems.map((item, index) =>
            <li key={index}>
              <CartProduct {...item}/>
            </li>
          )}
        </ul>
      </div>

      <div
        className="mx-auto w-full max-w-md border-2 h-fit sticky bottom-5 p-5 bg-neutral-100 shadow-2xl dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700 lg:mx-0">
        <div className="flex justify-between">
          Total Items:
          <span>{cart.cartTotalQuantity}</span>
        </div>
        <div className="flex justify-between">
          Subtotal:
          <span>${Math.abs(cart.cartTotalAmount).toFixed(2)}</span>
        </div>
        <div className="mt-5 flex flex-col items-center gap-1">
          <button
            className="bg-orange-400 hover:bg-orange-500 transition block w-full py-4 rounded-full font-bold text-white">
            Checkout
          </button>
          <span className="w-fit">or</span>
          <button
            onClick={() => dispatch(resetCartItems())}
            className="underline w-fit"
          >
            reset cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
