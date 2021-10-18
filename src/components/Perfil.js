import React from "react";

const Perfil = () => {
    return (
        <div className="signUp-logIn">
            <div>
                <h3>Registrarse</h3>
                <p>Si todavía no tenés una cuenta de usuario de asd.com utilizá esta opción para acceder al formulario de registro. Te solicitaremos la información imprescindible para realizar el proceso de compra.</p>
                <form>
                    <label for="nombres">Nombre(s):</label>
                    <input type="text" name="nombres" id="nombres" placeholder="Ej: Juan" minLength="2" maxLength="25" required></input>
                    <br/>
                    <label for="apellidos">Apellido(s):</label>
                    <input type="text" name="apellidos" id="apellidos" placeholder="Ej: Pérez" minLength="2" maxLength="25"></input>
                    <br/>
                    <label for="correoSignUp">Correo Electrónico:</label>
                    <input type="text" name="correoSignUp" id="correoSignUp" placeholder="Ej: juanperez@mail.com" minLength="5" maxLength="40" required></input>
                    <br/>
                    <label for="passwordSignUp">Contraseña:</label>
                    <input type="password" name="passwordSignUp" id="passwordSignUp" placeholder="Entre 6 y 12 caracteres" minLength="6" maxLength="12" required></input>
                    <br/>
                    <input type="submit" value="Crear cuenta"></input>
                </form>
            </div>
            <div>
                <h3>Iniciar Sesión</h3>
                <form>
                    <label for="correoLogIn">Correo Electrónico:</label>
                    <input type="text" name="correoLogIn" id="correoLogIn" placeholder="Correo Electrónico" minLength="5" maxLength="40" required></input>
                    <br/>
                    <label for="passwordLogIn">Contraseña:</label>
                    <input type="password" name="passwordLogIn" id="passwordLogIn" placeholder="Contraseña" minLength="6" maxLength="12" required></input>
                    <br/>
                    <input type="submit" value="Ingresar"></input>
                </form>
            </div>
        </div>
    )
}

export default Perfil;