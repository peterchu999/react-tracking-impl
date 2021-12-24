import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import TopNews from "./screens/TopNews";

function App() {
  return (
    <div class="container-fluid">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-news" element={<TopNews />} />
      </Routes>
    </div>
  );
}

export default App;
