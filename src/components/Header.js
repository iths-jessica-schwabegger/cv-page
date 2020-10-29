import React from "react";
import purebem from "purebem";

import './Header.scss';


export default function Header() {
    const block = purebem('header');
    return(
        <div className={ block() }>
            <nav className={ block('content') }>
                <a href="#">About</a>
                <a href="#">Experience</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    )
}