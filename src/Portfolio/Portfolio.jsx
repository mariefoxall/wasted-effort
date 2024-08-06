import Header from "../Header/Header";
import cigarettes from "../assets/cigarettes.jpg";
import lamp from "../assets/portal-lamp-cropped.jpg";
import smallPortalLamp from "../assets/purgatory-15.jpg";
import chair from "../assets/tall-chair.jpg";
import keys from "../assets/keys.jpg";
// import beadMaze from "../assets/bead-maze-close.jpg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <Header />
      <div className="portfolio-page">
        <h2>Portfolio:</h2>
        <div className="gallery">
          <div className="gallery-image-vert">
            <div className="gallery-image-overlay">
              PORTAL LAMP
              <br />
              Papier mache, wire, glass & paint
              <br />
              2024
            </div>

            <img
              src={lamp}
              alt="Multicolored 6-foot tall paper mache lamp and palm tree"
            />
          </div>
          <div className="gallery-image-vert">
            <div className="gallery-image-overlay">
              {" "}
              KEYS PLEASE
              <br />
              Carved douglas fir, papier mache, silver foil & lucite
              <br />
              2024
            </div>

            <img
              src={keys}
              alt="Carved wood and sculpted papier mache keys on a lucite chain"
            />
          </div>
          <div className="gallery-image">
            <div className="gallery-image-overlay">
              BEADED CIGARETTES
              <br />
              Lucite & glass beads
              <br />
              2024
            </div>

            <img
              src={cigarettes}
              alt="Silver ceramic lustre ashtray full of beaded cigarettes"
            />
          </div>
          <div className="gallery-image-vert">
            <div className="gallery-image-overlay">
              ORB PORTAL LAMP
              <br />
              Papier mache, wire & recycled plastic
              <br />
              2023
            </div>

            <img
              src={smallPortalLamp}
              alt="Paper mache orb lamp with recycled plastic shade"
            />
          </div>
          <div className="gallery-image-vert">
            <div className="gallery-image-overlay">
              HIGH CHAIR
              <br />
              Wood, lucite & paint
              <br />
              2024
            </div>

            <img
              src={chair}
              alt="Comically tall lime green & clear lucite chair with speckled ceramic bag and giant ceramic cigarette butt"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
