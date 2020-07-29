import React, { useState, useEffect } from 'react';
import './AdminHeader.styles.css';
import { Link } from 'react-router-dom';


const AdminHeader = (props) => {

    const AdminLogOut = () => {
        localStorage.clear();
        window.location.reload(true);
    }
    
    return (
    <div className = "AdminHeader">
        <div className = "AdminLogo"></div>
        <div className = "WelcomeAdmin">
            <h4>Dobrodošao Admin!</h4>
            <h4 className ="AdminLogout" onClick={AdminLogOut}>LOGOUT</h4>
            <Link className="link" to="/AdminPage"><p>Nazad na meni</p></Link>
        </div>
    </div>
    );
}

export default AdminHeader;