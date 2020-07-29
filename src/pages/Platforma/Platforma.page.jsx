import React from 'react';
import { Link, Redirect } from "react-router-dom";

import Header from '../../componente/Header/Header';
import Footer from '../../componente/footer/Footer.component';
import Button from '../../componente/Button/Button.component';

import './platforma.styles.css';

const PlatformaPage = () => (
    <div className="platformapage">
        <Header />
            <div className="maindisplaypagecontainer animate-reveal animate-first">
                    <h2>Odnos sa Vama i Vaše zadovoljstvo nam je jako bitno.</h2>
                    <h2>Platforma je tu da se bolje upoznamo, povežemo i komuniciramo!</h2>
                    <h3>Recepte, članke naših stručnjaka, nove proizvode i ponude Vam predstavljamo preko naše platforme!</h3>
                    
                </div>
                <div className = "PlatformaButton animate-reveal animate-second">
                <Link to="/PlatformaClanci"><Button naruci>PLATFORMA</Button></Link>
                </div>
            <Footer platforma/>
    </div>
)

export default PlatformaPage;