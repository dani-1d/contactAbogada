import React from "react";
import {Foother} from '../../layouds/foother/foother.jsx'
import {SendEmail} from '../../layouds/sendEmail/sendEmail.jsx'
import {Nav} from '../../layouds/navegador/header.jsx';
import '../../layouds/foother/foother.css'

export const ContactameP = () => {
    return (
        <div className="containerContac">
            <Nav/>
            <SendEmail/>
            <Foother/>
        </div>
    )
}

export default ContactameP;