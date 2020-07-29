import React, { useState, useEffect } from 'react';
import './login.styles.css';
import BioBihLogo from "./formalogo.png";
import InputForma from '../../componente/InputForma/InputForma.component';
import { Link, Redirect } from 'react-router-dom';
import Button from '../../componente/Button/Button.component';

const LogIn = (props) => {
    console.log('aaaaaa')
    console.log(props)
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [userloggedin, setUserloggedin] = useState({ status: false, message: '' });

    async function postData(url = '', data = {}) {
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

    const handleChangeEmail = (event) => {
        setUser({
            email: event.target.value,
            password: user.password
        })
    };
    const handleChangePassword = (event) => {
        setUser({
            email: user.email,
            password: event.target.value
        })
    }

    const [errormessages, setErrormessages] = useState({
        email: '',
        password: '',
        message: ''
    });


    const handleSubmit = (event) => {
        event.preventDefault();

        postData('http://localhost:3000/auth/signin', { email: user.email, password: user.password })
            .then(data => {
                if (data.success == false && data.errors) {
                    console.log(data);
                    setErrormessages({
                        email: data.errors.email[0],
                        password: data.errors.password[0]
                    })
                }

                if (data.success == false && data.message) {
                    setErrormessages({
                        email: null,
                        password: null,
                        message: data.message
                    })
                }
                if (data.user) {
                    props.setCurrentUser({
                        isChecked: true,
                        user: data.user,
                    })
                    localStorage.setItem('acessToken', data.token);
                }
            })
            .catch(error => console.log(error))

        setUser({
            email: '',
            password: ''
        });
    };

    if (errormessages.email) console.log(errormessages.email);
    if (errormessages.password) console.log(errormessages.password);

    return (
        <div className="loginpage">
            <div className="logodisplay">
                <Link to="/">
                    <img className="logoimage"
                        src={BioBihLogo}
                        alt="BioBihLogo" />
                </Link>
            </div>

            <div className="logindisplay">
                <form autoComplete="off" className="loginforma" onSubmit={(e) => handleSubmit(e)}>
                    <h1>Log In</h1>
                    <InputForma
                        type="email"
                        name="Email"
                        placeholder="Email"
                        required
                        value={user.email}
                        handleChange={handleChangeEmail}
                    />
                    <InputForma
                        type="password"
                        name="Password"
                        placeholder="Password"
                        required
                        value={user.password}
                        handleChange={handleChangePassword}
                    />
                    <Button rezervisi autocomplete="off" type="submit" > Log In</Button>
                </form>
                {
                    errormessages.email
                        ?
                        <h3>{errormessages.email}</h3>
                        :
                        null
                }
                {
                    errormessages.password ?
                        <h3>{errormessages.password}</h3>
                        :
                        null
                }
                {
                    errormessages.message
                        ?
                        <h3>{errormessages.message}</h3>
                        :
                        null
                }
            </div>
        </div >
    )
}

export default LogIn;