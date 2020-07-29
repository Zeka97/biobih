import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Button from '../../componente/Button/Button.component';
import Header from "../../componente/Header/Header";
import './certifikati.styles.css';
import cer1 from './cer01.jpg';
import cer2 from './cer02.jpg';
import cer3 from './cer03.jpg';
import cer4 from './cer04.jpg';


const Certifikati = () => (
    <div className="Certifikati">
        <div className="HeaderPicture">
            <Header />
            <div className="CertifikatiNaslov">
                <h1>Certifikati</h1>
            </div>
        </div>
        <div className="SlikeCertifikata">
            <img className="slika" src={cer1} alt="cer01" />
            <img className="slika" src={cer2} alt="cer02" />
            <img className="slika" src={cer3} alt="cer03" />
            <img className="slika" src={cer4} alt="cer04" />

        </div>

    </div>
)

export default Certifikati;