import React from 'react';
import { Link, Redirect } from "react-router-dom";

import icon1 from '../../pages/Onama/ikone/02.png';
import icon2 from '../../pages/Onama/ikone/01.png';
import icon3 from '../../pages/Onama/ikone/03.png';

import Button from '../Button/Button.component';
import InfoContainer from '../infocontainer/infocontainer.component';

import './moreinfo.style.css';

const MoreInfo = props => (
    <div className="moreinfo">
        <div className="moreinfo_title_box">
            <h3 className="moreinfo_hide_more_info" onClick={props.handleClick}>{"< Nazad"}</h3>
            <h1 className="moreinfo_title">O nama</h1>
        </div>
        <div className="moreinfo_about_container">
            <div className="moreinfo_about_iconandtextbox">
                <InfoContainer icon={icon1} moreinfo>
                    <h2>MISIJA</h2>
                    <p>Širimo svijest o značaju zdravog voća i povrća i <br />
                    činimo ga pristupačnim.</p>
                </InfoContainer>
                <InfoContainer icon={icon2} moreinfo>
                    <h2>VIZIJA</h2>
                    <p>BioBiH centar - sinonim za kvalitet voća i povrća!</p>
                </InfoContainer>
                <InfoContainer icon={icon3} moreinfo>
                    <h2>KUPUJMO DOMAĆE</h2>
                    <p>Podržimo bosanskohercegovački uzgoj i privredu,<br /> i ostanimo zdravi!</p>
                </InfoContainer>
            </div>

            <div className="TextContainer">
                <p>
                    BioBiH, pod pokroviteljstvom bosanskohercegovačke firme
                    ESOF d.o.o., domaćem tržištu nudi inovativan tip
                    snadbijevanja najznačajnijim kulturama povrća našeg
                    podneblja: mrkve, krompira i luka.
                    Pretplatite se na BioBiH i rezervišite godišnje, polugodišnje ili
                    mjesečne  količine povrća shodno Vašim potrebama,
                    prepustite uzgoj stručnjacima i isplanirajte dostavu na adresu!
                </p>

                <div className="ONamaDugme">
                    <a href="http://shop.esof.ba/"><Button onamabutton>SHOP</Button></a>
                </div>

                <p>
                    ESOF d.o.o., osnovan 2013. godine, odgovornošću,
                    integritetom i ekspertizom dostiže lidersku poziciju u
                    proizvodnji ekološki održivog voća i povrća.
                    Orijetisan ka međunarodnom tržištu Evropske unije i
                    Bliskog Istoka, uzgaja razne vrste voća i povrća po IFS i
                    global GAP standardima te kroz BioBiH centar,
                    visokokvalitetno voće i povrće nudi kupcima u BiH.
                </p>

                <div className="ONamaDugme">
                    <Link to="/Certifikati"><Button onamabutton>CERTIFIKATI</Button></Link>
                </div>

                <p>
                    Odnos sa Vama i Vaše zadovoljstvo nam je jako bitno.
                    Platforma je tu da se bolje upoznamo, povežemo i
                    komuniciramo!
                    Recepte, članke naših stručnjaka, nove proizvode i ponude
                    Vam predstavljamo preko naše platforme!
                </p>

                <div className="ONamaDugme">
                    <Link to="/Platforma"><Button onamabutton>PLATFORMA</Button></Link>
                </div>

                <p>
                    Odnos sa Vama i Vaše zadovoljstvo nam je jako bitno.
                    Platforma je tu da se bolje upoznamo, povežemo i
                    komuniciramo!
                    Recepte, članke naših stručnjaka, nove proizvode i ponude
                    Vam predstavljamo preko naše platforme!
                </p>

                <div className="ONamaDugme">
                    <Link to="/Proizvodiiusluge"><Button onamabutton>PAKETI</Button></Link>
                </div>

            </div>
        </div>
    </div>
);

export default MoreInfo;