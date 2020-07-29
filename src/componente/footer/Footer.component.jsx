import React from "react";

import "./footer.styles.css";

const Footer = (props) => (
  <footer className={`${props.onama ? "onamapagebackground": ""} 
  ${props.proizvodiiusluge ? "proizvodiiuslugebackground": ""}
  ${props.platforma ? "platformabackground": ""}
  ${props.kontakt ? "kontaktbackground": ""}
  footer`}>
    <div className="socialmedia">
      <div className ="icon1"><a href="https://www.facebook.com/biobihbyesof"></a></div>
      <div className="social_link">
        <a href="https://www.facebook.com/biobihbyesof">F A C E B O O K</a>
      </div>
      <div className="icon2"><a href="https://www.instagram.com/bio.bih/"></a></div>
      <div className="social_link">
        <a href="https://www.instagram.com/bio.bih/">I N S T A G R A M</a>
      </div>
    </div>
  </footer>
);

export default Footer;
