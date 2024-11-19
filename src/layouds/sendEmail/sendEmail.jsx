import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './sendEmail.css'


export const SendEmail = () => {

  const [mensajeExito, setMensajeExito] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_ydhtwwl','template_drm18gb',event.target,'TbWYggyRJdoHlvp9v')
    .then(response => {
      console.log(response);
      setMensajeExito('¡Tu mensaje ha sido enviado con éxito!'); // Modificación 3: Mostrar mensaje de éxito
      event.target.reset(); // Modificación 3: Limpiar los campos del formulario

      setTimeout(() => {
        setMensajeExito(''); // Limpiar mensaje de éxito
      }, 3000);
    })
    .catch(error => {
      console.log(error);
      setMensajeExito('Ocurrió un error al enviar tu mensaje. Por favor, inténtalo de nuevo.');

      setTimeout(() => {
        setMensajeExito(''); // Limpiar mensaje de éxito
      }, 3000);
    });
  }

  return (
    <div className='div-form'>
      <form className='form-mail' onSubmit={sendEmail}>
        <div className='containerTextF'>
        <div className='containerNameLastEmail'>
          <div className='containerName'>
            <input className='name' placeholder='NOMBRE*' type="text" name='name_use' required/>
            <input className='name' placeholder='APELLIDO' type="text" name='name2_use' />
          </div>
          <div className='containerEmail'>
            <input className='email' placeholder='EMAIL*' type="email" name='email_use' required/>
          </div>
        </div>


        <textarea className='mensaje' placeholder='MENSAJE*' name="message" id="" cols="30" rows="10" required></textarea>
        </div>
        <button className='botton'>ENVIAR</button>
      </form>

      {mensajeExito && <p className='mensaje-exito'>{mensajeExito}</p>} {/* Modificación 4: Mostrar mensaje de éxito */}
    </div>
  )
}