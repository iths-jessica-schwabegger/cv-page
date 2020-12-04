import React from "react";
import purebem from "purebem";

import './card.scss';


export default function Card() {
    const block = purebem('card');
    return(
        <div className={ block() }>
            <section className={ block('content') }>

            </section>
        </div>
    )
}