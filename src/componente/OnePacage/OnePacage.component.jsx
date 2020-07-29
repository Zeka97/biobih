import React from 'react';
import './OnePacage.styles.css';
import Button from '../../componente/Button/Button.component';
import { useState , useEffect } from 'react';

const OnePacage = (props) => {

    const [paket, setPaket] = useState({
    price:null,
    products:{
        krompir:null,
        mrkva:null,
        luk: null
    }
    });

    const handleChangeKrompira = (e) => {
        setPaket({
        price: paket.price,
          products:{
            krompir:e.target.value,
            mrkva:paket.products.mrkva,
            luk:paket.products.luk
          }
        })
    }

    const handleChangeMrkve = (e) => {
        setPaket({
        price: paket.price,
          products:{
            krompir:paket.products.krompir,
            mrkva:e.target.value,
            luk:paket.products.luk
          }
        })
    }

    const handleChangeLuka = (e) => {
        setPaket({
        price: paket.price,
          products:{
            krompir:paket.products.krompir,
            mrkva:paket.products.mrkva,
            luk:e.target.value
          }
        })
    }

    const handleChangePrice = (e) => {
        setPaket({
        price: e.target.value,
          products:{
            krompir:paket.products.krompir,
            mrkva:paket.products.mrkva,
            luk:paket.products.luk
          }
        })
    }

    async function Paketi(url = '', data={}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Authorization':`${localStorage.getItem('acessToken')}`,
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    };

    const PromijeniPaket = () => {
        Paketi(`http://localhost:3000/packages/${props.id}`,{
            price: paket.price,
            products: {
                Krompir: paket.products.krompir,
                Mrkva: paket.products.mrkva,
                Luk: paket.products.luk
            }
        })
        .then(data => {
          console.log(data);
          if(!data.success) window.location.reload(true);
        })
        .catch(error => console.log(error))
    };

    return(
        <div className = "OnePacage">
            <input type="number" onChange={(e) => handleChangeKrompira(e)}></input><span>KG Krompira</span>
            <input type="number" onChange={(e) => handleChangeMrkve(e)}></input><span>KG Mrkve</span>
            <input type="number" onChange={(e) => handleChangeLuka(e)}></input><span>KG Luka</span>
            <input type="number" onChange={(e) => handleChangePrice(e)}></input><span>KM</span>
            <h4>{props.imepaketa}</h4>
            <div className = "PromijeniPaket">
              <Button handleClick={() => PromijeniPaket()} rezervisi >Promijeni</Button>
            </div>
        </div>
    );
}

export default OnePacage;