import entretempsLogo from "./assets/entretemps-logo.png";
import "./App.css";
import Menu from "./Menu/Menu";
import Exhibitions from "./Exhibitions/Exhibitions";
import Contact from "./Contact/Contact";
import Visit from "./Visit/Visit";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <header>
        <button className="home-button">
          <Link to="/">
            <img src={entretempsLogo} className="logo" alt="Entretemps logo" />
          </Link>
        </button>
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
