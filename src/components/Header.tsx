import React from "react";
import purebem from "purebem";

import './Header.scss';

interface HeaderType {
    title: string
}


export default function Header({ title }: HeaderType) {
    const block = purebem('header');
    return(
        <div className={ block() }>
            <h1>{ title }</h1>
            <nav className={ block('content') }>
                <a href="#">About</a>
                <a href="#">Experience</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    )
}