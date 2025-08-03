import marieWindow from "../assets/marie-window-studio-portrait.jpg";
import Header from "../Header/Header";
import "./About.css";

function About() {
  return (
    <>
      <Header />
      <div className="about-page">
        <h2>About:</h2>
        <div className="bio-section">
          <p>
            Marie is a self-taught multi-disciplinary artist. Under the name
            Wasted Effort, their line of jewelry and housewares was sold in
            boutiques across North America for over a decade. Nowadays,
            Marie&apos;s sculptural works in papier mache, wood, recycled
            plastic, lucite and clay are more outsized explorations of structure
            and form.
          </p>{" "}
          <p>
            Their collaborative multimedia exhibition, Purgatory is a Waiting
            Room, with ceramicist Etty Anderson, showed in Montreal May/ June
            2024 and their solo show, Reproduction Interdite, showed In Montreal
            for the month of June 2025. Marie was an invited artist at the
            Queering Mud ceramics residency at Watershed in Maine and the
            International Artist in Residence program at Medalta in Alberta.
          </p>
          <img
            className="bio-image"
            src={marieWindow}
            alt="Portrait of the artist in a window nook surrounded by paper mache sculptures"
          />
        </div>
      </div>{" "}
    </>
  );
}

export default About;
