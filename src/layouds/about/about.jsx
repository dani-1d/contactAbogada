import React from 'react'
import './about.css'

export const About = () => {
  return (
    <div className='About'>
        
        <div className='containerImg'>
            <img className='imgAbout' src="https://res.cloudinary.com/ducioy4z4/image/upload/v1731070697/WhatsApp_Image_2024-10-09_at_9.35.34_PM_xdjlov.jpg" alt="" />
        </div>
        <div className='containerTextAbout'>
            <div className='containerText1About'>
                <h2>¡Hola!</h2>
                <p>Soy</p>
                <h3>Liseth Sinisterra Rovira.</h3>
                <h4>Asesoro en materia jurídica y de extranjería, orientando hacia profesionales calificados, haciendo exitoso tu trámite.</h4>
            </div>
            <div className='containerText2About'>
                <div>
                    <h4>CONTÁCTAME 
                    <a href="https://wa.me/34621061641"> AQUÍ.</a>
                    </h4>
                </div>
                <p>Te redireccionará a WhatsApp.</p>
            </div>
        </div>

    </div>
  )
}

 