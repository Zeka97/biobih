import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import Button from '../../componente/Button/Button.component';
import Header from "../../componente/Header/Header";
import './PlatformaClanci.styles.css';
import OnePost from "../../componente/OnePost/OnePost.component";


const PlatformaClanci = (props) => {

    /* Ucitavanje clanaka */
    const [clanci, setClanci] = useState({
        data: null,
        sucess: false,
    });

    const [openfullscreen,setOpenfullscreen] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/news`)
            .then((response) => response.json())
            .then((data) => {
                setClanci({
                    data: data,
                    sucess: true,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    setTimeout(function () {
        console.log(clanci);
    }, 10000);


    if (clanci.data)
        return (
            <div className="PlatformaClanci">
                {!openfullscreen

                ?

                <div className="ClanciHeaderPicture">
                    <Header />
                    <div className="ClanciHeading">
                        <h1>Recepte, članke naših stručnjaka, nove proizvode i <br /> ponude Vam predstavljamo preko naše platforme!</h1>
                    </div>
                </div>
                :
                null
                }

                <div className="SpisakClanaka" >
                    {clanci.data.news.map(clanak => (
                        <OnePost key={clanak.id}
                            naslov={clanak.title}
                            slika={clanak.image}
                            text={clanak.text}
                            setOpenfullscreen={setOpenfullscreen}
                            openfullscreen={openfullscreen}
                        />))}
                </div>

            </div>

        );
    else return null;
}

export default PlatformaClanci;