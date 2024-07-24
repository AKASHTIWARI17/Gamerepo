import React from 'react'
import Home from './Home'
import Background from './Components/Games/Background'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyAccount from './Components/Games/navbar/MyAccount'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/background" element={<Background />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

