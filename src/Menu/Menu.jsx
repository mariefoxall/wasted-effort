import "./Menu.css";
import burger from "../assets/burger.svg";

function Menu() {
  return (
    <div className="nav-menu">
      <div className="burger-border">
        <img src={burger} className="burger" alt="Hamburger menu icon" />
      </div>
      <nav className="nav-menu-links">
        <div className="nav-menu-links__container">
          <a href="/portfolio">portfolio</a>
          <a href="/contact">contact</a>
          <a href="/about">about</a>
          <a href="http://wastedeffort.myshopify.com">shop</a>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
