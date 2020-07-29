import React from 'react';

import './button.styles.css';

const Button = (props) => (
    <button onClick={props.handleClick} className={`${props.shop ? "shop" : ""} 
    ${props.onamabutton ? "onamabutton": ""} 
    ${props.rezervisi ? "rezervisi": ""}
    myButton`}>{props.children}</button>
);

export default Button;