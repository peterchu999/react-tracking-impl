import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactTrackingInitializer from "./hoc/ReactTrackingInitializer";
import Home from "./screens/Home";
import TopNews from "./screens/TopNews";

function App() {
  return (
    <div class="container-fluid">
      <ReactTrackingInitializer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-news" element={<TopNews />} />
        </Routes>
      </ReactTrackingInitializer>
    </div>
  );
}

export default App;
