import React from "react";
import purebem from "purebem";

import './Footer.scss';


export default function Footer() {
    const block = purebem('footer');
    return(
        <div className={ block() }>
            <section className={ block('content') }>

            </section>
        </div>
    )
}