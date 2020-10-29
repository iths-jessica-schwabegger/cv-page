import React from "react";
import purebem from "purebem";

import './InfoSection.scss';


export default function InfoSection() {
    const block = purebem('info-section');
    return(
        <div className={ block() }>
            <section className={ block('content') }>

            </section>
        </div>
    )
}