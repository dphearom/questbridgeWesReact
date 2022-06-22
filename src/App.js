import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import About from "./About/about.js";
import Contact from "./Contact/contact.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
