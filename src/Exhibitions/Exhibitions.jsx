import lamp from "../assets/entretemps-lamp.jpg";
import key from "../assets/entretemps-key.jpg";
import beadMaze from "../assets/bead-maze-close.jpg";
import ceramicTable from "../assets/ceramic-table.jpg";
import "./Exhibitions.css";

function Exhibitions() {
  return (
    <>
      <h2>Current Exhibition:</h2>
      <h3>Purgatory is a Waiting Room</h3>
      <p>by Etty Anderson & Marie Foxall</p>

      <img
        className="gallery-image"
        src={lamp}
        alt="Multicolored 6-foot tall paper mache lamp and palm tree"
      />
      <img
        className="gallery-image"
        src={key}
        alt="Silver foil paper mache key and extra-large carved wooden key, chained together and hanging on a wall"
      />
      <img
        className="gallery-image"
        src={beadMaze}
        alt="Lucite structure with ceramic and wood beads"
      />
      <img
        className="gallery-image"
        src={ceramicTable}
        alt="Pink ceramic table with rounded edges and a wacky multicolored vessel placed on top"
      />
    </>
  );
}

export default Exhibitions;
