import React, { useEffect, useState } from 'react';
import './App.css';

import HomePage from './pages/Naslovna/HomePage';
import KontaktPage from './pages/Kontakt/KontaktPage.page';
import ONama from './pages/Onama/ONama.page';
import PlatformaPage from './pages/Platforma/Platforma.page';
import ProizvodiIUsluge from './pages/ProizvodiIUsluge/ProizvodiiUsluge.page';
import LogIn from './pages/LogIn/LogIn.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserPage from './pages/Userpage/Userpage.component';
import AdminPage from './pages/AdminPage/AdminPage.page';
import GuestRoute from './componente/GuestRoute/guestroute';
import PrivateRoute from './componente/PrivateRoute/privateroute';
import AdminUsers from './pages/AdminUsers/AdminUsers.page';
import AdminAllDeliveries from './pages/AdminAllDeliveries/AdminAllDeliveries.page';
import AdminDates from './pages/AdminDates/AdminDates.page';
import AdminPacages from './pages/AdminPacages/AdminPacages.page';
import AdminPosts from './pages/AdminPosts/AdminPosts.page';
import PlatformaClanci from './pages/PlatformaClanci/PlatformaClanci.page';
import PlatformaClanak from './pages/PlatformaClanak/PlatformaClanak.page';
import Certifikati from './pages/Certifikati/Certifikati.page';

const App = () => {

  const [currentUser, setCurrentUser] = useState({
    isChecked: false,
    user: null,
  });

  useEffect(() => {
    const verify = async () => {
      if (!localStorage.getItem('acessToken')) {
        setCurrentUser({
          isChecked: true,
          user: null
        });
        return;
      }
      let response = await fetch('http://localhost:3000/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('acessToken')
        }
      })

      if (response.ok) {
        const data = await response.json();

        setCurrentUser({
          isChecked: true,
          user: data.user
        });
      } else {
        setCurrentUser({
          isChecked: true,
          user: null
        });
      }
    }

    if (!currentUser.isChecked) verify();
  }, [])

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser])


  return (
    <div className="App">
      <Switch>
        <GuestRoute path="/" exact user={currentUser}>
          <HomePage />
        </GuestRoute>
        <GuestRoute path="/Onama" exact user={currentUser}>
          <ONama />
        </GuestRoute>
        <GuestRoute path="/Proizvodiiusluge" exact user={currentUser}>
          <ProizvodiIUsluge />
        </GuestRoute>
        <GuestRoute path="/Kontakt" exact user={currentUser}>
          <KontaktPage />
        </GuestRoute>
        <GuestRoute path="/Platforma" exact user={currentUser}>
          <PlatformaPage />
        </GuestRoute>
        <GuestRoute path="/Kontakt" exact user={currentUser}>
          <KontaktPage />
        </GuestRoute>
        <GuestRoute path="/Login" exact user={currentUser}>
          <LogIn setCurrentUser={setCurrentUser} />
        </GuestRoute>
        <GuestRoute path="/PlatformaClanci" exact user={currentUser}>
          <PlatformaClanci />
        </GuestRoute>
        <GuestRoute path="/PlatformaClanak" exact user={currentUser}>
          <PlatformaClanak />
        </GuestRoute>
        <GuestRoute path="/Certifikati" exact user={currentUser}>
          <Certifikati />
        </GuestRoute>

        <PrivateRoute path="/UserPage" exact component={UserPage} user={currentUser} />
        <PrivateRoute adminRoute path="/AdminPage" exact component={AdminPage} user={currentUser} />
        <PrivateRoute adminRoute path="/AdminUsers" exact component={AdminUsers} user={currentUser} />
        <PrivateRoute adminRoute path="/AdminAllDeliveries" exact component={AdminAllDeliveries} user={currentUser} />
        <PrivateRoute adminRoute path="/AdminDates" exact component={AdminDates} user={currentUser} />
        <PrivateRoute adminRoute path="/AdminPacages" exact component={AdminPacages} user={currentUser} />
        <PrivateRoute adminRoute path="/AdminPosts" exact component={AdminPosts} user={currentUser} />
      </Switch>
    </div>
  );
}

export default App;