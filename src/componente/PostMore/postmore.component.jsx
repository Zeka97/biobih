import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import Header from '../Header/Header';
import Button from '../Button/Button.component';

import './postmore.styles.css';

const PostMore = (props) => {


    const BackToClanci = () => {
        props.setOpenfullscreen(false);
    }

    

    return(
        <div>
        <p onClick={() => BackToClanci()}>Back</p>
        <img src={props.slika} alt="slika" />
        <h1>{props.naslov}</h1>
        </div>
    )


}
export default PostMore;