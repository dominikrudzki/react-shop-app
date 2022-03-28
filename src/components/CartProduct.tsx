import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { decrementProductQuantity, removeFromCart, incrementProductQuantity } from "../store/CartSlice"
import { FC, useState } from "react"
import { ProductInfo } from "../types"

const CartProduct: FC<ProductInfo & { quantity: number }> = ({image, name, quantity, price, id}) => {
  const dispatch = useDispatch()
  const [itemQuantity, setItemQuantity] = useState<number>(quantity)

  return (
    <div
      className="grid grid-cols-2 grid-rows-2 mb-1 border-2 p-5 gap-5 dark:text-neutral-100 dark:border-neutral-700 sm:grid-cols-3 sm:grid-rows-1">

      <div className="flex gap-5 items-center col-span-2 sm:col-span-1">
        <div className="sm:basis-1/3 h-12">
          <img src={image} alt={name} className="sm:mx-auto h-full aspect-auto block object-contain"/>
        </div>
        <Link
          to={{pathname: "/product", search: "?id=" + id.toString()}}
          className="underline font-semibold truncate w-fit"
        >
          {name}
        </Link>
      </div>

      <div className="flex items-center sm:justify-end">
        <button
          disabled={itemQuantity < 2}
          onClick={() => {
            if (itemQuantity > 1) {
              setItemQuantity(itemQuantity - 1)
              dispatch(decrementProductQuantity(id))
            }
          }}
          className="p-2"
        >
          <i className="fa-solid fa-minus"/>
        </button>
        <input
          type="number"
          value={itemQuantity}
          disabled={true}
          autoComplete="off"
          className="w-12 text-center mx-1"
        />
        <button
          onClick={() => {
            setItemQuantity(itemQuantity + 1)
            dispatch(incrementProductQuantity(id))
          }}
          className="p-2"
        >
          <i className="fa-solid fa-plus"/>
        </button>
      </div>

      <div className="flex gap-2 items-center justify-end">
        <div
          className="relative before:absolute before:-top-2 before:left-0 before:text-xs before:content-['Total:']">{(price * itemQuantity).toFixed(2)}$
        </div>
        <button onClick={() => dispatch(removeFromCart(id))}>
          <i className="fa-solid fa-trash-can"/>
        </button>
      </div>

    </div>
  )
}

export default CartProduct
