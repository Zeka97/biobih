import React from 'react';

import './infocontainer.style.css';

const InfoContainer = props => (
    <div className={`${props.moreinfo? 'displaybox1_moreinfo' : ''} displaybox1_ikoneitekst`}>
        <img className="ikona" src={props.icon} alt="icona1" />
            <div className="displaybox1_ikoneitekst_testbox1">
                    {props.children}
            </div>
    </div>

);

export default InfoContainer;