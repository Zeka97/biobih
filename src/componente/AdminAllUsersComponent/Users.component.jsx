import React from 'react';
import './Users.styles.css';


const Users = (props) => {

    return(
        <div className="alluserspage">
            <p className="allusersid">{props.id} ID</p>
            <p>{props.ime_prezime}</p>
            <p>{props.email}</p>
            <p>{props.telefon}</p>
            <p>{props.opstina}</p>
            <p>{props.adresa}</p>
            <p className="kolicina">{props.krompir}kg KROMPIRA</p>
            <p className="kolicina">{props.mrkva}kg MRKVE</p>
            <p className="kolicina">{props.luk}kg LUKA</p>
            <p className="kolicina">{props.cijenapaketa}KM</p>
            {props.status ? <p className="aktivanuser">AKTIVAN</p> : <p className="aktivirajusera" onClick={() => props.handleClick()}>AKTIVIRAJ USERA</p>}
        </div>
    );
}

export default Users;