import React from 'react'
import { Route, Redirect } from 'react-router'

const PrivateRoute = ({ component, exact, path, user, adminRoute = false }) => {
    if(!user.isChecked) return null;
    if(user.isChecked && !user.user) return <Redirect to='/' />
    else if(user.isChecked && user.user) {
        if(adminRoute && !user.user.isAdmin) return <Redirect to={{
            pathname: '/Userpage',
            state: { user: user.user }
        }} />
        else if(!adminRoute && user.user.isAdmin) return <Redirect to={{
            pathname: '/AdminPage',
            state: { user: user.user }
        }} />
        else return <Route component={component} exact={exact} path={path} />
    }
}

export default PrivateRoute