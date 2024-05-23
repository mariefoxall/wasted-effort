import Booking from "./Booking";
import "./Visit.css";

function Visit() {
  return (
    <>
      <h2>Check us out IRL</h2>
      <div className="visit-section">
        <h3>You can find us at:</h3>
        <p>4307 rue Sainte Catherine E</p>
        <p>Montreal QC</p>
      </div>
      <div className="visit-section">
        <h3>Opening hours:</h3>
        <p>- from time to time</p>
        <p>- by appointment</p>
      </div>
      <Booking />
    </>
  );
}

export default Visit;
