import React, { useState } from 'react';

import Header from '../Header/Header';

import BioBihLogo from '../../pages/LogIn/formalogo.png';

import HomePage from '../../pages/Naslovna/HomePage';

import InputForma from '../InputForma/InputForma.component';

import Button from '../Button/Button.component';
import { Link } from 'react-router-dom';

import './naruciforma.style.css';

const NaruciForma = (props) => {


    const [errormessages, setErrormessages] = useState({
        email: '',
        password: ''
    });





    /* Registruj se api */
    async function Registracija(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    /* poziv api */
    const RegistrujSe = (e) => {
        e.preventDefault();

        Registracija(`http://localhost:3000/auth/signup`, {
            fullName: podaciusera.fullName,
            municipality: podaciusera.municipality,
            address: podaciusera.adress,
            phone: podaciusera.phone,
            email: podaciusera.email,
            password: podaciusera.password,
            package: podaciusera.package
        })
            .then(data => {
                console.log(data);
                if (data.success) window.location.reload();
                else (setErrormessages({
                    email: data.errors.email[0],
                    password: data.errors.password[0]
                }))
            })
            .catch(error => console.log(error))
    };
    if (errormessages.email) console.log(errormessages.email);
    if (errormessages.password) console.log(errormessages.password);

    const [podaciusera, setPodaciusera] = useState({
        fullName: null,
        municipality: null,
        adress: null,
        phone: null,
        email: null,
        password: null,
        package: props.imepaketa.data.id
    });

    const handleChangeime = (e) => {
        setPodaciusera({
            fullName: e.target.value,
            municipality: podaciusera.municipality,
            adress: podaciusera.adress,
            phone: podaciusera.phone,
            email: podaciusera.email,
            password: podaciusera.password,
            package: podaciusera.package
        })
    };

    const handleChangeopcina = (e) => {
        setPodaciusera({
            fullName: podaciusera.fullName,
            municipality: e.target.value,
            adress: podaciusera.adress,
            phone: podaciusera.phone,
            email: podaciusera.email,
            password: podaciusera.password,
            package: podaciusera.package
        })
    };
    const handleChangeadresa = (e) => {
        setPodaciusera({
            fullName: podaciusera.fullName,
            municipality: podaciusera.municipality,
            adress: e.target.value,
            phone: podaciusera.phone,
            email: podaciusera.email,
            password: podaciusera.password,
            package: podaciusera.package
        })
    };

    const handleChangetelefon = (e) => {
        setPodaciusera({
            fullName: podaciusera.fullName,
            municipality: podaciusera.municipality,
            adress: podaciusera.adress,
            phone: e.target.value,
            email: podaciusera.email,
            password: podaciusera.password,
            package: podaciusera.package
        })
    };
    const handleChangeemail = (e) => {
        setPodaciusera({
            fullName: podaciusera.fullName,
            municipality: podaciusera.municipality,
            adress: podaciusera.adress,
            phone: podaciusera.phone,
            email: e.target.value,
            password: podaciusera.password,
            package: podaciusera.package
        })
    };
    const handleChangepassword = (e) => {
        setPodaciusera({
            fullName: podaciusera.fullName,
            municipality: podaciusera.municipality,
            adress: podaciusera.adress,
            phone: podaciusera.phone,
            email: podaciusera.email,
            password: e.target.value,
            package: podaciusera.package
        })
    };

    console.log(podaciusera);
    console.log(props.imepaketa);
    return (
        <div className="narucipage">
            <div className="logoside">
                <Link to="/">
                    <img className="logoimage"
                        src={BioBihLogo}
                        alt="BioBihLogo" />
                </Link>
            </div>
            <div className="narucidisplay">
                <h3 className="backtonarucipage" onClick={props.handleClick}>{"<Nazad"}</h3>
                <form className="naruciforma" onSubmit={(e) => RegistrujSe(e)}>
                    <div className="infoforma">
                        <h1>{props.imepaketa.data.name}</h1>
                        <p>{props.imepaketa.data.price} KM</p>
                        {props.imepaketa.data.products.map(produkt =>
                            <li key={produkt.id}>{Number(produkt.amount)} KG {produkt.name}   </li>)}
                    </div>

                    <h3>Paket Usluga</h3>
                    <div className="formanarucivanje">
                        <InputForma
                            type="text"
                            name="imeiprezime"
                            placeholder="Ime i prezime"
                            required
                            handleChange={(e) => handleChangeime(e)}
                        />
                        <select className="opstina" onChange={(e) => handleChangeopcina(e)}>
                            <option disabled selected>Izaberite opštinu:</option>
                            <option value="Centar">Centar</option>
                            <option value="Hadzići">Hadžići</option>
                            <option value="Ilidža">Ilidža</option>
                            <option value="Ilijaš">Ilijaš</option>
                            <option value="Novi Grad">Novi Grad</option>
                            <option value="Novo Sarajevo">Novo Sarajevo</option>
                            <option value="Stari Grad">Stari Grad</option>
                            <option value="Trnovo">Trnovo</option>
                            <option value="Vogošća">Vogošća</option>
                        </select>
                        <InputForma
                            type="text"
                            name="Adresa"
                            placeholder="Adresa"
                            required
                            handleChange={(e) => handleChangeadresa(e)}
                        />
                        <InputForma
                            type="number"
                            name="Broj telefona"
                            placeholder="Broj telefona"
                            required
                            handleChange={(e) => handleChangetelefon(e)}
                        />
                        <InputForma
                            type="email"
                            name="Email"
                            placeholder="Email"
                            required
                            handleChange={(e) => handleChangeemail(e)}
                        />
                        <InputForma
                            type="password"
                            name="Password"
                            placeholder="Password"
                            required
                            handleChange={(e) => handleChangepassword(e)}
                        />
                        <Button rezervisi type="submit">Naruči</Button>
                    </div>
                </form>
                {
                    errormessages.email
                        ?
                        <h3>{errormessages.email}</h3>
                        :
                        null
                }
                {
                    errormessages.password
                        ?
                        <h3>{errormessages.password}</h3>
                        :
                        null
                }
            </div>
        </div>
    );
}

export default NaruciForma;