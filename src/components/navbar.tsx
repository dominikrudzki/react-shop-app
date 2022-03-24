import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../types"

const Navbar = () => {
  const cartItemsCount = useSelector(({cart}: RootState) => cart.cartTotalQuantity)
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') === 'true')
  const [totalQuantity, setTotalQuantity] = useState<number>(cartItemsCount)

  useEffect(() => {
    setTotalQuantity(cartItemsCount)
  }, [cartItemsCount])

  useEffect(() => {
    darkMode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark')
    localStorage.setItem('darkMode', JSON.parse(darkMode.toString()))
  }, [darkMode])

  return (
    <div
      className="sticky top-0 left-0 bg-gray-200 z-10 flex justify-between px-6 py-4 shadow-md dark:bg-neutral-600 dark:text-neutral-100"
    >
      <div>
        <Link to="/">
          <h2 className="font-bold">React-Shop-App</h2>
        </Link>
      </div>
      <div>
        <button className="mr-5">
          <i onClick={() => setDarkMode(!darkMode)} className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} text-xl`}/>
        </button>
        <button
          className="relative">
          {totalQuantity > 0 &&
            <div
              className="absolute -right-3 -top-2 bg-orange-400 rounded-full w-4 h-4 text-xs">{totalQuantity > 9 ? '9+' : totalQuantity}</div>}
          <i className="fa-solid fa-cart-shopping text-xl"/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
