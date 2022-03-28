import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { HashRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Main from "./pages/Main"
import { Provider } from "react-redux"
import store from "./store"
import Cart from "./pages/Cart"
import ProductPreview from "./pages/ProductPreview"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <div className="min-h-screen min-w-[326px] bg-neutral-100 dark:bg-neutral-800">
          <Navbar/>
          <div className="p-5 max-w-screen-2xl mx-auto">
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="cart" element={<Cart/>}/>
              <Route path="product" element={<ProductPreview/>}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
