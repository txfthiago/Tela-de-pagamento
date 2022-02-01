import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/index'
import Paypal from './pages/paypal'

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/paypal" element={<Paypal />} />
    </Routes>
  </BrowserRouter>
)
export default AppRoutes
