import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import About from "./About/about.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
