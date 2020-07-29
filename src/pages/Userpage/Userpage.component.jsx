import React, { useEffect, useState } from "react";

import "./Userpage.styles.css";

import biobihlogo from './bioBIH_logo.png';

import bearlogo from './bear.png'

import { Redirect } from "react-router-dom";


const UserPage = (props) => {

  const [narucenopovrce, setNarucenopovrce] = useState({
    products: {
      Krompir: 0,
      Mrkva: 0,
      Luk: 0
    },
    deliveryDate: '',
  });

  const [kolicinapovrca, setKolicinapovrca] = useState({
    data: null,
    succes: false
  });

  const [opendates, setOpendates] = useState({
    data: null,
    succes: false
  });

  const [deliverydates, setDeliverydates] = useState({
    data: null,
    succes: false
  })

  useEffect(() => {
    fetch(`http://localhost:3000/auth/order`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Authorization': `${localStorage.getItem('acessToken')}`,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setKolicinapovrca({
          data: data,
          succes: true

        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setKolicinapovrca]);

  useEffect(() => {
    fetch(`http://localhost:3000/deliveries/dates`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Authorization': `${localStorage.getItem('acessToken')}`,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOpendates({
          data: data,
          succes: true

        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setOpendates]);

  useEffect(() => {
    fetch(`http://localhost:3000/auth/deliveries`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Authorization': `${localStorage.getItem('acessToken')}`,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDeliverydates({
          data: data,
          succes: true
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setDeliverydates]);



  let user = props.location.state.user;



  const LogOut = () => {
    localStorage.clear();
    window.location.reload(true);
  }

  const handleChangekrompira = (event) => {
    setNarucenopovrce({
      products: {
        Krompir: event.target.value,
        Mrkva: narucenopovrce.products.Mrkva,
        Luk: narucenopovrce.products.Luk
      },
      deliveryDate: narucenopovrce.deliveryDate
    });
  }
  const handleChangemrkve = (event) => {
    setNarucenopovrce({
      products: {
        Krompir: narucenopovrce.products.Krompir,
        Mrkva: event.target.value,
        Luk: narucenopovrce.products.Luk
      },
      deliveryDate: narucenopovrce.deliveryDate
    });
  }
  const handleChangeluka = (event) => {
    setNarucenopovrce({
      products: {
        Krompir: narucenopovrce.products.Krompir,
        Mrkva: narucenopovrce.products.Mrkva,
        Luk: event.target.value
      },
      deliveryDate: narucenopovrce.deliveryDate
    });
  }

  const handleChangeOption = (event) => {
    setNarucenopovrce({
      products: {
        Krompir: narucenopovrce.products.Krompir,
        Mrkva: narucenopovrce.products.Mrkva,
        Luk: narucenopovrce.products.Luk,
      },
      deliveryDate: event.target.value
    })
  }

  async function putIsporuku(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Authorization': `${localStorage.getItem('acessToken')}`,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  };

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Authorization': `${localStorage.getItem('acessToken')}`,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  };

  const [apiresponse, setApiresponse] = useState({
    message: null,
    succes: null
  });

  const potvrdiIsporuku = (key) => {
    putIsporuku(`http://localhost:3000/auth/deliveries/${key}`, {
      "isCompleted": true
    })
      .then(data => {
        console.log(data);
        setApiresponse({
          message: data.message,
          succes: data.success
        });

      })
      .catch(error => console.log(error))
  };
  if (apiresponse.succes == true) window.location.reload(true);

  const Naruci = () => {
    postData('http://localhost:3000/auth/deliveries', {
      products: {
        Krompir: narucenopovrce.products.Krompir,
        Mrkva: narucenopovrce.products.Mrkva,
        Luk: narucenopovrce.products.Luk
      },
      deliveryDate: narucenopovrce.deliveryDate
    })
      .then(data => {
        console.log(data);
        setApiresponse({
          message: data.message,
          succes: data.success
        });

      })
      .catch(error => console.log(error))
  };
  if (apiresponse.succes == true) window.location.reload(true);



  if (!user.isActive) {
    return (

      <div className="userpage">
        <img className="userpage-logo" src={biobihlogo} alt="biobihlogo" />
        <h3 className="userpage-username">Dobrodošli,<br />
          {user.fullName}
        </h3>
        <h4 onClick={() => LogOut()}>LOGOUT</h4>
        <img className="userpage-bearlogo" src={bearlogo} alt="bearlogo" />
        <h1 className="userpage-message">Vaš account trenutno nije aktivan!</h1>
        <h2 className="userpage-message-description">Nakon izvršene uplate,admin će izvršiti aktivaciju vašeg paketa</h2>
      </div>
    );
  }

  else if (user.isActive && kolicinapovrca.succes && opendates.succes && deliverydates.succes) {
    return (
      <div className="UserProfile">
        <div className="UserProfile_UserHeader">
          <div className="UserProfile_Logo">
            <div className="UserProfile_UserWelcome">
              <div className="UserProfile_Text">
                <h4>
                  Dobrodošli, <br />
                  {user.fullName}
                </h4>
              </div>
              <div className="UserProfile_Logout"><h4 onClick={() => LogOut()}>LOGOUT</h4></div>
            </div>
          </div>
        </div>
        <div className="Zalihe">
          <a href="#" className="NoveZalihe">DODAJ NOVE ZALIHE</a>
        </div>
        <div className="UserInfo">
          <h1>Na raspolaganju: </h1>
          <div className="InfoZalihe">
            {kolicinapovrca.data.order.products.map(produkt => {
              return (
                <div key={produkt.id} className="Krompir">
                  <h2>{produkt.total - produkt.used}</h2>
                  <h1>{produkt.name}</h1>
                </div>)
            })}
          </div>
        </div>
        <div className="Narucivanje">
          <h1>Naruči:</h1>
          <div className="Input">
            <input type="number" onChange={(event) => handleChangekrompira(event)} className="UserInput" />
            <p>KG Krompira</p>
            <input type="number" onChange={(event) => handleChangemrkve(event)} className="UserInput" />
            <p>KG Mrkve</p>
            <input type="number" onChange={(event) => handleChangeluka(event)} className="UserInput" />
            <p>KG Luka</p>
          </div>
          <h2>Dostupni datumi za narudzbe:</h2>
          <div className="select">
            <select name="slct" id="slct" value={narucenopovrce.deliveryDate} onChange={(e) => handleChangeOption(e)}>
              <option defaultValue>Dostupni datumi isporuke</option>
              {opendates.data.dates.map((datum, index) => {
                return (
                  <option value={datum.date.match(/\d+-\d+-\d+/g)} key={datum.id}>{datum.date.match(/\d+-\d+-\d+/g)}</option>
                )
              })}
            </select>
          </div>
          <div className="NaruciDugme">
            <button onClick={() => Naruci()} className="Naruci">NARUCI</button>
          </div>
          <div className="ListaNarudzbi">
            {deliverydates.data.deliveries.map(datum => {
              return (
                <div className="Naruceno" key={datum.id}>
                  <p>{datum.deliveryDate.match(/\d+-\d+-\d+/g)}</p>
                  {
                    !datum.isCompleted ?
                      <p className="potvrdaizvrseneposiljke" onClick={() => potvrdiIsporuku(datum.id)}>Potvrdi da je stiglo</p>
                      :
                      <p>Isporuceno</p>
                  }

                </div>
              )
            })}

          </div>
        </div>

      </div>
    );
  }
  else return null;
}


export default UserPage;
