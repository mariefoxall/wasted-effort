import Header from "../Header/Header";
import "./Shop.css";

function Shop() {
  return (
    <>
      <Header />
      <div className="shop-page">
        <h2>SHOP</h2>
        <h3>Coming soon! </h3>
        <p className="closed-info">
          If you have any questions, please email us at{" "}
          <a className="email-link" href="mailto:bonjour.hi@entretemps.ca">
            hello@wastedeffort.ca
          </a>
        </p>
      </div>
    </>
  );
}

export default Shop;
