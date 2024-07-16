import React from 'react'
import Home from './Home'
import Background from './Components/Games/Background'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/background" element={<Background />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

