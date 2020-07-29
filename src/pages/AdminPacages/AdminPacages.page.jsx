import React, { useState , useEffect } from 'react';
import "./AdminPacages.styles.css";
import AdminHeader from "../../componente/AdminHeader/AdminHeader.component";
import OnePacage from '../../componente/OnePacage/OnePacage.component';

const AdminPacages = (props) => {
  
  const [paketi, setPaketi] = useState({
    data: null,
    sucess: false,
  });

  useEffect(() => {
    fetch(`http://localhost:3000/packages`)
      .then((response) => response.json())
      .then((data) => {
        setPaketi({
          data: data,
          sucess: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  setTimeout(function () {
    console.log(paketi);
  }, 10000);

  if(paketi.data)
  return(
      <div className = "AdminPacages">
        <AdminHeader />
        <div className = "AdminPacagesHeader">
          <h1>Paketi</h1>
        </div>
        <div className = "AdminPacagesPaketi">
        {
            paketi.data.packages.map(jedanpaket => 
            <OnePacage key = {jedanpaket.id}
              id={jedanpaket.id}
              imepaketa={jedanpaket.name}
            />
            )
          }
        </div>

      </div> 
  );
  else return null;
}

export default AdminPacages;