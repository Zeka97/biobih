import React from 'react'
import { Route, Redirect } from 'react-router'

const GuestRoute = ({exact, path, user, children }) => {
    console.log(children)
    if(!user.isChecked) return null;
    if(user.isChecked && !user.user) return <Route component={() => children} exact={exact} path={path} />
    else if(user.isChecked && user.user) return <Redirect to={{
        pathname: '/Userpage',
        state: { user: user.user }
    }} />
}

export default GuestRoute