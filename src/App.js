import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Explore from "./Explore";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="explore" element={<Explore />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
