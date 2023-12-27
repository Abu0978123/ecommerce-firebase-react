import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Nopage from './pages/nopage/Nopage';
import Dashboard from './pages/admin/dashboard/Dashboard';
import MyState from './context/data/myState';

const App = () => {
  return (
    <MyState>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/order" element={<Order/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/*" element={<Nopage/>} />
    </Routes>
  </Router>
  </MyState>
  )
}

export default App