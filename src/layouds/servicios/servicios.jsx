
import React, { useState } from "react";
import {Link} from "react-router-dom";
import './servicios.css';

export const Servicios = () => {
    // Lista de servicios con descripciones completas
    const servicios = [
        { 
            id: 1, 
            img: "https://res.cloudinary.com/ducioy4z4/image/upload/v1731073434/16_vqzhj3.png",
            titulo: "Arraigos", 
            descripcionCompleta: "Te representamos en el trámite de todos los tipos de arraigo: arraigo social, arraigo laboral, arraigo familiar, arraigo por formación."
        },
        { 
            id: 2, 
            img: "https://res.cloudinary.com/ducioy4z4/image/upload/v1731073430/15_hodvwy.png",
            titulo: "Residencia o Ciudadania", 
            descripcionCompleta: "Quieres Obtener Residencia o Ciudadanía en España? Con nuestra ayuda es fácil lograrlo. Te acompañamos en el proceso de regulación que requieras." 
        },
        { 
            id: 3, 
            img: "https://res.cloudinary.com/ducioy4z4/image/upload/v1731073440/17_hr46og.png",
            titulo: "Gestión de Estancia para Estudios", 
            descripcionCompleta: "Brindamos ayuda para gestionar permisos de estancia para estudios, con asesoría en la documentación y requisitos que necesitas para estudiar en el país." 
        },
        { 
            id: 4, 
            img: "https://res.cloudinary.com/ducioy4z4/image/upload/v1731073446/18_jhbpem.png",
            titulo: "Homologación de Títulos", 
            descripcionCompleta: "Con nosotros podrás homologar tu Bachillerato o tu Título Universitario. Ofrecemos asistencia para validar tus títulos académicos en España, asegurando su reconocimiento oficial en el país." 
        },
        { 
            id: 5, 
            img: "https://res.cloudinary.com/ducioy4z4/image/upload/v1731073452/19_ucy0iy.png",
            titulo: "Licencias de Conducir", 
            descripcionCompleta: "Te ofrecemos acompañamiento en todo el proceso para adquirir tu licencia de forma ágil y segura." 
        },
        // Agrega más servicios con descripciones aquí
    ];

    // Estado para controlar qué servicios están expandidos
    const [expanded, setExpanded] = useState({});

    // Función para alternar la vista de descripción completa
    const toggleDescripcion = (id) => {
        setExpanded((prevExpanded) => ({
            ...prevExpanded,
            [id]: !prevExpanded[id] // Alterna el estado de expansión
        }));
    };

    return (
            <div className="seccionServicios">
                <h2 className="tituloSeccionServicios">Tipos de Trámites...</h2>
                <div className="containerRecuadrosInfo">
                    {servicios.map((servicio) => (
                        <div
                            key={servicio.id}
                            className={`recuadrosInfo ${expanded[servicio.id] ? "expanded" : ""}`}
                            onClick={() => toggleDescripcion(servicio.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={servicio.img} alt="" className="ImgServi" />
                            <h3>{servicio.titulo}</h3>
                            <p>
                                {expanded[servicio.id] ? servicio.descripcionCompleta : ""}
                                <span className="toggleDescripcion">
                                    <br />
                                    <br />
                                    {expanded[servicio.id] ? " Menos" : " Más..."}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
                <h3 className="recuadroMasInfo">
                <Link className='cantainerImg1' to="/Contactame">
                    Contáctanos para brindarte más información sobre nuestros servicios...
                </Link></h3>
            </div>
    );
}

export default Servicios;