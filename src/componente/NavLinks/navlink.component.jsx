import React from 'react';

import { Link } from 'react-router-dom';

import './navlink.styles.css';

import Button from '../Button/Button.component';

const NavLinks = props => (
        <ul className={`${props.sidedrawer ? "sidedrawer" :""} navbar`}>
                <li>
                    <Link className="link" to="/">POČETNA</Link>
                </li>
                <li>
                    <Link className="link" to="/Onama">O NAMA</Link>
                </li>
                <li>
                    <Link className="link" to="/Proizvodiiusluge">PROIZVODI I USLUGE</Link>
                </li>
                <li>
                    <Link className="link" to="/Kontakt">KONTAKT</Link>
                </li>
                <li>
                    <Link className="link" to="/Platforma">PLATFORMA</Link>
                </li>
                <li>
                    <Link className="link" to="/Login">LOG IN</Link>
                </li>
                <li>
                    <a className="link" href="https://shop.esof.ba/"><Button shop>SHOP</Button></a>
                </li>
            </ul>
);

export default NavLinks;