import React from "react";
import {Nav} from '../../layouds/navegador/header.jsx';
import {Servicios} from '../../layouds/servicios/servicios.jsx';
import {Foother} from '../../layouds/foother/foother.jsx'
import '../../App.css'

export const ServiciosP = ()=>{
    return (
        <div className="App1">
            <Nav/>
            <Servicios/>
            <Foother/>
        
        </div>
    )
}

export default Servicios;