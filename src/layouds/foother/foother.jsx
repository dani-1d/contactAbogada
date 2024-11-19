import  React from 'react'
import './foother.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export const Foother = () => {
    return (
        <div className='foother'>
            <div className='containerImgF'>
                <img className='imgF' src="https://res.cloudinary.com/ducioy4z4/image/upload/v1731070697/WhatsApp_Image_2024-10-09_at_9.35.34_PM_xdjlov.jpg" alt="" />
            </div>
            <div className='containerTexF'>
                <h2 className='textC'> <FontAwesomeIcon icon ={faUser} className='icon'/><Link className='cantainerImg1' to="/About">Liseth Sinisterra Rovira</Link></h2>
                <a className='textC' href="mailto:Lizsiro369@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='icon'/>  Lizsiro369@gmail.com</a>
                <a className='textC' href="https://wa.me/34621061641"><FontAwesomeIcon icon={faPhone} className='icon'/> +34 621 06 16 41</a>
                <h2 > </h2>
                <p className='text' >¡Empieza Ahora!</p>
            </div>
        </div>
    )
}