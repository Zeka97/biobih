import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Header.css';


import logo from './bioBIH_logo.png';

import SideDrawer from '../side-drawer/side-drawer.component';
import NavLinks from '../NavLinks/navlink.component';
import Backdrop from '../Backdrop/Backdrop';

const Header = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return (
    <React.Fragment>
    <div className="header">
        
            <div className="logo">
            <Link to="/"><img src={logo} alt="Logo" /></Link>
            </div>
        <nav className="nav">
                <NavLinks />
            </nav>
        <button className="main-navigationmenu_btn" onClick={openDrawer} >
            <span />
            <span />
            <span />
        </button>
     </div>
    {drawerIsOpen && <Backdrop onClick={closeDrawer}/>}
        
         <SideDrawer show={drawerIsOpen}>
         <nav className="main-navigation__drawer-nav">
             <NavLinks sidedrawer />
        </nav>
    </SideDrawer>
        
    </React.Fragment>
);
}



export default Header;