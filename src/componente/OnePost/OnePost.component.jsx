import React,{useState} from 'react';
import './OnePost.styles.css';
import Button from '../../componente/Button/Button.component';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const OnePost = (props) => {


    const OpenInFullScreen = () => {
        props.setOpenfullscreen(true);
        props.setPost({
            slika: props.slika,
            naslov: props.naslov,
            text: props.text
        })
    };
    if(!props.openfullscreen)
    {
        return (
            <div className="OnePost">
                <div className="PostImage">
                    <img className="post_image" src={props.slika} />
                </div>
                <div className="PostHeading">
                    <h3>{props.naslov}</h3>
                    <Button rezervisi handleClick={() => OpenInFullScreen()}>
                        Pogledaj
                    </Button>
                </div>
                <div className="tmp">
                    {ReactHtmlParser(props.text)}
                </div>


            </div >
        );
    }
}

export default OnePost;