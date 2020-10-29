import React from "react";
import purebem from "purebem";
import profileImg from "../img/IMG_0178.jpg";

import './Aside.scss';


export default function Aside() {
    const block = purebem('aside');
    return(
        <div className={ block() }>
            <section className={ block('content') }>
                <div className={ block('img-container') }>
                    <img
                        alt="me"
                        src={ profileImg } />
                </div>
            </section>
        </div>
    )
}