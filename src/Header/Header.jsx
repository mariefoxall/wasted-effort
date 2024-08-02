import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <button className="home-button">
        <Link to="/">
          <h2 className="big-w">W</h2>{" "}
        </Link>
      </button>
      <Menu />
    </header>
  );
}

export default Header;
