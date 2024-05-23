import "./Menu.css";
import burger from "../assets/burger.svg";

function Menu() {
  return (
    <div className="nav-menu">
      <img src={burger} className="burger" alt="Hamburger menu icon" />
      <nav className="nav-menu-links">
        <div className="nav-menu-links__container">
          <a href="/exhibitions">exhibitions</a>
          <a href="/contact">contact</a>
          <a href="/visit">visit</a>
          <a href="/shop">shop</a>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
