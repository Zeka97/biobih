import React from 'react';
import './OneUser.styles.css';


const OneUser = (props) => {

    return(
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.ime_prezime}</td>
                <td>{props.email}</td>
                <td>{props.telefon}</td>
                <td>{props.opstina}</td>
                <td>{props.adresa}</td>
                <td>{props.krompir}</td>
                <td>{props.mrkva}</td>
                <td>{props.luk}</td>
                <td>{props.cijenapaketa}</td>
                <td>{props.status ? <p>Aktivan</p> : <p>Neaktivan</p>}</td>
            </tr>
        </tbody>
    );
}

export default OneUser;