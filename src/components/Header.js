import React from "react";
import purebem from "purebem";

import './Header.scss';


export default function Header() {
    const block = purebem('header');
    return(
        <div className={ block() }>
            <section className={ block('content') }>

            </section>
        </div>
    )
}