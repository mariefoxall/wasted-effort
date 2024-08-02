import Header from "../Header/Header";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact-page">
        <h2>CONTACT</h2>
        <div className="contact-section">
          {" "}
          <h3>EMAIL:</h3>
          <p className="email-address">
            Give us a shout at{" "}
            <a className="email-link" href="mailto:bonjour.hi@entretemps.ca">
              hello@wastedeffort.ca
            </a>
          </p>
        </div>
        <div className="contact-section">
          <h3>IRL:</h3>
          <p>4307 rue Sainte Catherine E</p>
          <p>Montreal QC</p>
        </div>
      </div>
    </>
  );
}
