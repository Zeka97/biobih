import React from 'react';
import "./AdminPage.styles.css";
import AdminHeader from "../../componente/AdminHeader/AdminHeader.component";
import { Link } from 'react-router-dom';

const AdminPage = (props) => {
    console.log(props)
    return(
        <div className = "AdminPage">
            <AdminHeader />
            <div className = "AdminMenu">
                <div className = "AdminKorisnici"><Link className="link" to="/AdminUsers">Korisnici</Link></div>
                <div className = "AdminNarudzbe"><Link className="link" to="/AdminAllDeliveries">Narudzbe</Link></div>
                <div className = "AdminCijene"><Link className="link" to="/AdminPacages">Cijene</Link></div>
                <div className = "AdminDates"><Link className="link" to="/AdminDates">Datumi</Link></div>
                <div className = "AdminPostovi"><Link className="link" to="/AdminPosts">Postovi</Link></div>


                
                
                
                
                
            </div>
        </div>
    )
}

export default AdminPage;