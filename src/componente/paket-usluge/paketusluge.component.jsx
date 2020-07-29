import React from "react";

import "./paketusluge.style.css";

import Button from "../Button/Button.component";

const PaketUsluge = (props) => {
  const { paket } = props
  return (
    <div className="paketusluge">
      <div className="titlebox">
        <h2 className="cijenapaketa">{paket.price} BAM</h2>
      </div>
      <div className="descriptioncontent">
        <h3 className="descriptiontext">Paket Usluga</h3>
        <h1 className="imepaketa">{paket.name}</h1>
        <div className="nazivikolicinaproizvoda">
          {paket.products.map((product, index) => {
            return (
              <div key={product.id}>
                <h3 className="kolicinaproizvoda">{product.amount}kg</h3>
                <p className="nazivproizvoda">{product.name}</p>
              </div>
            )
          })
          }
        </div>
        <div className="dugme">
          <Button handleClick={() => props.handleClick(props.paket)} rezervisi>
            REZERVIŠI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaketUsluge;