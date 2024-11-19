import React from "react";
import {Nav} from '../../layouds/navegador/header.jsx';
import {About} from '../../layouds/about/about.jsx';
import '../../App.css'

export const AboutP = ()=>{
    return (
        <div className="App1">
            <Nav/>
            <About/>
        
        </div>
    )
}

export default About;