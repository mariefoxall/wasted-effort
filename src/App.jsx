import "./App.css";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Visit from "./Visit/Visit";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";
// import About from "./About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
