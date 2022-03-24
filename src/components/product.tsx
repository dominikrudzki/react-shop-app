import { ProductInfo } from "../types"
import React, { FC } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/cartSlice"

const Product: FC<ProductInfo> = (props) => {
  const dispatch = useDispatch()
  const handleAddToCart = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(addToCart(props))
  }

  return (
    <div className="p-2 w-full sm:basis-1/2 dark:text-neutral-100">
      <Link to="/23" className="grid h-full shadow-lg rounded-xl dark:bg-neutral-900 hover:scale-105 transition">
        <div className="bg-neutral-200 rounded-t-xl h-56 dark:bg-neutral-700">
          <img
            src={props.image}
            alt={props.name}
            loading="lazy"
            className="h-full w-fit mx-auto p-4"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 p-4">
          <span className="font-bold text-xl">{props.name}</span>
          <span className="text-xl text-right">${props.price.toFixed(2)}</span>
          <span className="col-span-2 truncate">{props.description}</span>
        </div>
        <div className="text-right p-4">
          <button onClick={handleAddToCart}
                  className="hover:bg-orange-300 rounded-full w-10 h-10 active:scale-105 active:bg-orange-400 transition">
            <i className="fa-solid fa-cart-arrow-down text-xl"/>
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Product
