import React from "react";
import purebem from "purebem";
import profileImg from "../img/IMG_0178.jpg";
// import cv from "../cv/cv-jessica-schwabegger.pdf";

import './Aside.scss';


export default function Aside() {
    const block = purebem('aside');

    function clickHandler() {
        // window.open();
    }

    return(
        <div className={ block() }>
            <section className={ block('content') }>
            {/* <a href={ cv } download={ cv }>Download CV</a> */}
                <div className={ block('button-container') }>
                    <button type="submit" onClick={ clickHandler }>DOWNLOAD CV</button>
                </div>
                <div className={ block('img-container') }>
                    <img
                        alt="me"
                        src={ profileImg } />
                </div>
            </section>
        </div>
    )
}