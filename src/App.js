import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <h1>Welcome to browser router</h1>

      <nav>
        {/* <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a> */}
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <Routes>
          <Route path="/" element={<p>I also load</p>} />
        </Routes>
      </footer>
    </BrowserRouter>
  );
};

export default App;
