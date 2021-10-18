import React from "react";
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <footer>
            <div className="footer-ayuda">
                <h2>Ayuda</h2>
                <ul>
                    <li><Link to="/">Información de envíos</Link></li>
                    <li><Link to="/">Cambios y devoluciones</Link></li>
                    <li><Link to="/">Políticas de privacidad</Link></li>
                    <li><Link to="/">Términos y condiciones</Link></li>
                    <li><Link to="/">FAQS</Link></li>
                </ul>
            </div>
            <div>
                <h2>Nosotros</h2>
                <ul>
                    <li>Contacto:</li>
                    <li>Whatsapp: 12-3456-7890</li>
                    <li>Correo: xxxxxxx@xxxxx.xxx</li>
                </ul>
            </div>
            <div>
                <h2>Follow Us</h2>
                <ul>
                    <li><a href='https://www.instagram.com/'>Instagram</a></li>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}