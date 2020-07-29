import React from "react";
import "./homepage.styles.css";
import Header from "../../componente/Header/Header";
import { Link, Redirect } from 'react-router-dom';

import Button from "../../componente/Button/Button.component";

import Footer from "../../componente/footer/Footer.component";

const HomePage = () => (
  <div className="background-image">
    <Header />
    <h1 className="animate-reveal animate-first">
      SUPPORTING <br />
      THE <br />
      FUTURE
    </h1>
    <div className="button animate-reveal animated-second">
    <Link to="/Proizvodiiusluge"><Button>NARUČI</Button></Link>
    </div>
    <Footer />
  </div>
);

export default HomePage;
