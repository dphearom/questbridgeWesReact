import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import About from "./About/about.js";
import Contact from "./Contact/contact.js"
import Blog from "./Blog/blog.js"
import Post1 from "./BlogPost/post1.js"
import Post2 from "./BlogPost/post2.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/blog" element={<Blog/>}></Route>
        <Route exact path="/blog/post1" element={<Post1/>}></Route>
        <Route exact path="/blog/post2" element={<Post2/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
