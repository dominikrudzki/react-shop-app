import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Main from "./pages/Main"
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-neutral-100 dark:bg-neutral-800">
          <Navbar/>
          <div className="p-5">
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="cart" element={<Main/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
