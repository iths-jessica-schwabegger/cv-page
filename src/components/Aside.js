import React from "react";
import purebem from "purebem";

import './Aside.scss';


export default function Aside() {
    const block = purebem('aside');
    return(
        <div className={ block() }>
            <section className={ block('content') }>

            </section>
        </div>
    )
}