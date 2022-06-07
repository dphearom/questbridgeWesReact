import Navbar from "./Navigation/Navbar.js";
import HeroSection from "./HeroSection/HeroSection.js"
import FooterMain from "./Footer/FooterMain.js"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./About/about.js"

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/about" component={<About />}></Route>
          </Routes>
          <Navbar/>
        </BrowserRouter>
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <FooterMain />
      </div>
    </>
  );
}

export default App;
