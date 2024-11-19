import React from "react";
//import logo from '../Questios.png';
import {Nav} from '../../layouds/navegador/header.jsx';
import {About} from '../../layouds/about/about.jsx';
import {Servicios} from '../../layouds/servicios/servicios.jsx';
import {Foother} from '../../layouds/foother/foother.jsx'
import {Link} from "react-router-dom";
import '../../App.css'

export const InicioP = ()=>{
    return (
        <div className="App1">
            <Nav/>
            <div className='cantainerImg'>
            <Link className='cantainerImg1' to="/Contactame">
              <img src="https://res.cloudinary.com/ducioy4z4/image/upload/v1731077115/A%C3%B1adir_un_t%C3%ADtulo_d4wxil.png" className="Questions" alt="logo" />
              </Link></div>
            <About/>
            <Servicios/>
            <Foother/>
        
        </div>
    )
}

export default InicioP;