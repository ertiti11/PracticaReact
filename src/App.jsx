import "./App.css";
import Home from "./Pages/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
