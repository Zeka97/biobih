import React from 'react';

import './inputforma.style.css';

const InputForma = (props) => {

    return (
        <input 
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            className="email_input"
            required={props.required}
            autoComplete="off"
            onChange={props.handleChange}
            value={props.value}
        />
    );
}

export default InputForma;