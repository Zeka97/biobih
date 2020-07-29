import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';

import "./proizvodiiusluge.styles.css";
import "../../pdf_docs/infographics.pdf";

import Header from "../../componente/Header/Header";
import Footer from "../../componente/footer/Footer.component";
import PaketUsluge from "../../componente/paket-usluge/paketusluge.component";

import Naruciforma from "../../componente/Naručiforma/NaruciForma.component";

import Button from "../../componente/Button/Button.component";
import NaruciForma from "../../componente/Naručiforma/NaruciForma.component";
import CustomPaket from '../../componente/CustomPaket/custompaket.component';


const ProizvodiIUsluge = () => {
  const [custompaket, setCustomPaket] = useState(true);
  const [rezervisi, setRezervisi] = useState(true);
  const [imepaketa, setImepaketa] = useState({
    data: []
  });
  const [paketi, setPaketi] = useState({
    data: {},
    sucess: false,
  });

  const rezervisifunkc = (tippaketa) => {
    setRezervisi(false);

    setImepaketa({
      data: tippaketa,
    });
  };

  const backToPage = () => {
    setRezervisi(true);
    setCustomPaket(true);
  };

  const goToCustomPaket = () => {
    setCustomPaket(false);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/packages`)
      .then((response) => response.json())
      .then((data) => {
        setPaketi({
          data: data,
          sucess: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (rezervisi === true && paketi.sucess == true && custompaket == true) {
    return (
      <div className="proizvodiiusluge">
        <Header />
          <div className="infographics_button">
          <a href="https://drive.google.com/file/d/1fhi8zM2ZwO9Elt_MPgYACVUuzzCsIWF3/view?usp=sharing">
            <h3 className="infographic">Šta nudimo?</h3>
            </a>
            <div className="arrow"></div>
          </div>
        <div className="proizvodiiusluge-displaycontainer">
          <div className="maincontainer">
            <div className="paketiusluga">
              {
                paketi.data.packages.map((paket, index) =>
                  <PaketUsluge key={paket.id}
                    paket={paket}
                    handleClick={rezervisifunkc}
                  />
                )
              }
            </div>
            <div className="textbox">
              <div className="text">
                <h1 className="animate-reveal animate-first">
                  Paketi i usluge
                </h1>
                <p className="animate-reveal animate-first">
                  BioBih paketi su zalihe povrća (mrkva,krompir,
                  <br />
                  luk) čijom pretplatom Vi rezervišete odabrane
                  <br />
                  količine u određenom vremenskom periodu.
                  <br />
                  <br />
                  Povrće je ekološki održivo,zdravo i domaće,
                  <br />
                  uzgojeno od strane agronomskih stručnjaka i<br />
                  skladišteno u profesionalnim hladnjačama.
                  <br />
                  <br />
                  Svježina je zagarantovana.
                </p>
                <Link to="/Platforma"><Button rezervisi>PLATFORMA</Button></Link>
              </div>
            </div>
          </div>

          <div className="paket_po_mjeri">
            <h3 className="infographic" onClick={() => goToCustomPaket()}>Kreirajte paket po mjeri</h3>
            <div className="arrow"></div>
          </div>

          <Footer proizvodiiusluge />
        </div>
      </div>
    );
  } else if (rezervisi === false && paketi.sucess === true) {
    return <NaruciForma handleClick={backToPage} imepaketa={imepaketa} />;
  }

  else if (custompaket === false) {
    return (
      <CustomPaket products={paketi.data.packages[0].products} setCustomPaket={setCustomPaket} />
    )
  }

  else return (null);
};

export default ProizvodiIUsluge;