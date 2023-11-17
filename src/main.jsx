import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import UsersContextProvider from './contexts/ProductContext';
import CartContextProvider from "./contexts/CartContext";
console.log(import.meta.env)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UsersContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </UsersContextProvider>
  </Router>
)
