import React from "react";
import Home from "./Home";
import Background from "./Components/Games/Background";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GamePreview from "./GamePreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/background" element={<Background />} />
        <Route path="/game/:id" element={<GamePreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
