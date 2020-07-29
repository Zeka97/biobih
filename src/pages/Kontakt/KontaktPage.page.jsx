import React from "react";
import Header from "../../componente/Header/Header";
import Footer from "../../componente/footer/Footer.component";
import InputForma from "../../componente/InputForma/InputForma.component";

import location from './location.svg';
import phone from './phone.svg';
import mail from './mail.svg';

import "./KontaktPage.styles.css";

const KontaktPage = () => {
  return (
    <div className="kontaktpage">
      <Header />
      <div className="kontakt_containter popup-reveal popup-first">
        <div className="kontakt">
          <form onSubmit="submit">
            <div className="email">
              <InputForma
                type="email"
                name="Email"
                placeholder="E-mail adresa"
                required
              />
            </div>
            <div className="naslov">
              <InputForma
                type="text"
                name="Naslov"
                placeholder="Naslov"
                required
              />
            </div>
            <div className="message">
              <textarea
                name="message"
                placeholder="Vaša poruka..."
                className="message_input"
                cols="30"
                rows="5"
                required
                autoComplete="off"
              ></textarea>
            </div>
            <div className="submit">
              <input
                type="submit"
                value="Pošalji poruku"
                className="form_button"
              />
            </div>
          </form>
        </div>
        <div className="informacije">
          <div className="info1 popup-reveal animate-first">
            <div className="broj1">
              <h1>01</h1>
            </div>
            <div className="text1">
              <h1>LOKACIJA</h1>

              <div className="lokacija_cnt">
                <img className="kontakt_ikona" src={location} />
                <p>Donji Vakufu, Ul. 770. Sbbr bb 70220 Donji Vakuf</p>
              </div>

              <div className="lokacija_cnt">
                <img className="kontakt_ikona" src={location} />
                <p>Gradska tržnica Markale u Sarajevu, Mula Mustafe Bašeskije 24a Centar Sarajevo</p>
              </div>

            </div>
          </div>
          <div className="info1 popup-reveal popup-first">
            <div className="broj1">
              <h1>02</h1>
            </div>
            <div className="text1">
              <h1>INFO</h1>

              <div className="lokacija_cnt">
                <img className="kontakt_ikona" src={phone} />
                <p>+ 387 61 920 919</p>
              </div>

              <div className="lokacija_cnt">
                <img className="kontakt_ikona" src={mail} />
                <p>info@biobih.ba</p>
              </div>

            </div>
          </div>
          <div className="info1 popup-reveal popup-first">
            <div className="broj1">
              <h1>03</h1>
            </div>
            <div className="text1">
              <h1>PRODAJA</h1>

              <div className="lokacija_cnt">
                <img className="kontakt_ikona" src={phone} />
                <p>+ 387 61 920 919</p>
              </div>

              <div className="lokacija_cnt">
                <img className="kontakt_ikona" src={mail} />
                <p>sales@biobih.ba</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer kontakt />
    </div>
  );
};

export default KontaktPage;
