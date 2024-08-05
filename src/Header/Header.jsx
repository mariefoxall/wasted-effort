import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import "./Header.css";
import bigW from "../assets/w-logo.jpeg";

function Header() {
  return (
    <header>
      <button className="home-button">
        <Link className="home-link" to="/">
          {/* <h2 className="big-w">W</h2>{" "} */}
          <img src={bigW} className="big-w" alt="Wasted Effort logo" />
        </Link>
      </button>
      <Menu />
    </header>
  );
}

export default Header;
