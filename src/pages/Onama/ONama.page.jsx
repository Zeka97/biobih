import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import Header from "../../componente/Header/Header";
import Footer from "../../componente/footer/Footer.component";
import MoreInfo from "../../componente/moreinfo/moreinfo.component";
import "./onama.styles.css";

import icon1 from "./ikone/02.png";
import icon2 from "./ikone/01.png";

import Button from "../../componente/Button/Button.component";
import InfoContainer from "../../componente/infocontainer/infocontainer.component";

const ONamaPage = () => {
  const [info, setInfo] = useState(true);

  const openMoreInfo = () => {
    setInfo(false);
  };

  const closeMoreInfo = () => {
    setInfo(true);
  };

  return (
    <div className="onamapage">
      <Header />
      {info && (
        <div className="onamacontainer">
          <h1 className="title">O nama</h1>
          <p className="title-description">
            Podržimo bosanskohercegovački uzgoj i privredu,
                  <br /> i ostanimo zdravi!
                </p>
          <div className="maindisplaycontainer">
            <div className="displaybox1 popup-reveal popup-first">
              <InfoContainer icon={icon2}>
                <h2>VIZIJA</h2>
                <p>BioBiH centar - sinonim za kvalitet voća i povrća!</p>
              </InfoContainer>
              <InfoContainer icon={icon1}>
                <h2>MISIJA</h2>
                <p>
                  Širimo svijest o značaju zdravog voća i povrća i <br />
                  činimo ga pristupačnim.
                </p>
              </InfoContainer>
              <h3 onClick={openMoreInfo}>
                Vidi više
          </h3>
            </div>
            <div className="displaybox2 popup-reveal popup-first">
              <div className="displaybox2_textibuttoncontainer">
                <a href="https://shop.esof.ba/"><Button onamabutton>SHOP</Button></a>
              </div>
              <div className="displaybox2_textibuttoncontainer popup-reveal popup-first">

                <Link to="/Proizvodiiusluge"><Button onamabutton>PAKETI</Button></Link>
              </div>
              <div className="displaybox2_textibuttoncontainer popup-reveal popup-first">

                <Link to="/Certifikati"><Button onamabutton>CERTIFIKATI</Button></Link>
              </div>
            </div>
          </div>

          <h3 className="openmoreinfo" onClick={openMoreInfo}>
            Vidi više
          </h3>

          <Footer onama />
        </div>
      )}

      {!info && <MoreInfo handleClick={closeMoreInfo} />}
    </div>
  );
};

export default ONamaPage;
