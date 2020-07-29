import React from 'react';
import './OneOrder.styles.css';


const OneOrder = (props) => {

    return(
        <tbody>
            <tr>
                <td>{props.status ? <p>Isporučeno</p> : <p>U procesu</p>}</td>
                <td>{props.ime_prezime}</td>
                <td>{props.email}</td>
                <td>{props.telefon}</td>
                <td>{props.opstina}</td>
                <td>{props.adresa}</td>
                <td>{props.datum.match(/\d+-\d+-\d+/g)}</td>
                <td>{props.krompira}</td>
                <td>{props.mrkve}</td>
                <td>{props.luka}</td>
            </tr>
        </tbody>
    );
}

export default OneOrder;