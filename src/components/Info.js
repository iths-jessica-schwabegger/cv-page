import React from "react";
import purebem from "purebem";

import './Info.scss';


export default function Info() {
    const block = purebem('info');
    return(
        <div className={ block() }>
            <h1>JESSICA SCHWABEGGER</h1>
            
        </div>
    )
}