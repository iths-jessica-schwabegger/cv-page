import React from "react";
import purebem from "purebem";

import './Info.scss';


export default function Info() {
    const block = purebem('info');

    const list = [2, 5, 16, 222, 47, 33, 1, 89, 36, 474, 22, 11, 6, 98, 7, 3, 64];

    return (
        <div className={ block() }>
            {/* <h1>JESSICA SCHWABEGGER</h1> */}
        </div>
    )
}