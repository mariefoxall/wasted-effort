import Header from "../Header/Header";
import cigarettes from "../assets/cigarettes.jpg";
import lamp from "../assets/portal-lamp-cropped.jpg";
import smallPortalLamp from "../assets/purgatory-15.jpg";
import chair from "../assets/tall-chair.jpg";
import keys from "../assets/keys.jpg";
import beadMaze from "../assets/bead-maze-close.jpg";
import slurp from "../assets/slurp-full.jpg";
import slurpClose from "../assets/slurp-close.jpg";
import kongLamp from "../assets/kong-lamp.jpg";
import allDogs from "../assets/all-dogs.jpg";
import pen from "../assets/receptionists-pen.jpg";
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
              SLURP
              <br />
              Stoneware, underglaze, glaze, lucite & water
              <br />
              2024
            </div>

            <img
              className="gallery-image-itself"
              src={slurp}
              alt="Ceramic fire hydrant sculpture with streams of water"
            />
          </div>
          <div className="gallery-image-vert">
            <div className="gallery-image-overlay">
              SLURP
              <br />
              Stoneware, underglaze, glaze, lucite & water
              <br />
              2024
            </div>

            <img
              className="gallery-image-itself"
              src={slurpClose}
              alt="Closeup of ceramic fire hydrant sculpture with streams of water and sculpted word SLURP"
            />
          </div>
          <div className="gallery-image-vert">
            <div className="gallery-image-overlay">
              KONG LAMP
              <br />
              Stoneware, porcelain, pigment & glaze
              <br />
              2024
            </div>

            <img
              className="gallery-image-itself"
              src={kongLamp}
              alt="Multicolored marbled hanging ceramic lampshade in the shape of a dog toy"
            />
          </div>
          <div className="gallery-image-vert">
            <div className="gallery-image-overlay">
              ALL DOGS GO TO HEAVEN
              <br />
              Polyester fabric, batting, thread & acrylic beads
              <br />
              2024
            </div>

            <img
              className="gallery-image-itself"
              src={allDogs}
              alt="Giant textile chain with dog tags that say ALL DOGS GO TO HEAVEN"
            />
          </div>
          <div className="gallery-image-vert">
            <div className="gallery-image-overlay">
              PORTAL LAMP
              <br />
              Papier mache, wire, glass & paint
              <br />
              2024
            </div>

            <img
              className="gallery-image-itself"
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
              className="gallery-image-itself"
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
              className="gallery-image-itself"
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
              className="gallery-image-itself"
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
              className="gallery-image-itself"
              src={chair}
              alt="Comically tall lime green & clear lucite chair with speckled ceramic bag and giant ceramic cigarette butt"
            />
          </div>
          <div className="gallery-image-vert">
            <div className="gallery-image-overlay">
              BEAD MAZE - collaboration with Etty Anderson
              <br />
              Wood, lucite & ceramic
              <br />
              2024
            </div>

            <img
              className="gallery-image-itself"
              src={beadMaze}
              alt="Ceramic, wood and lucite 6-foot-tall bead maze"
            />
          </div>
          <div className="gallery-image-vert">
            <div className="gallery-image-overlay">
              RECEPTIONIST&apos;S PEN
              <br />
              Glass seed beads, PVC tubing & pen
              <br />
              2024
            </div>

            <img
              className="gallery-image-itself"
              src={pen}
              alt="Beaded pen on a long beaded chain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
