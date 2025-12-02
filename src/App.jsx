import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Navbar from "./Navbar.jsx";
// import Testpopup from "./Pages/Testpopup.jsx";

// Here, in App: what will be same on all pages, fex navbar, header, footer
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* <Route path="/testpopup" element={<Testpopup />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
