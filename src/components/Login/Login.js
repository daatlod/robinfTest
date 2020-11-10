import React from 'react';

import logoPizza from '../../assets/Login-Best-Pizza.png';
import iconUser from '../../assets/ic_usuario.png';
import iconPass from '../../assets/ic_contrasena.png';


const login = (props) => (
    <div className={`login__module h-100  ${!props.loginScreen ? 'd-none' : ''}`}>
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-11 col-md-10 col-lg-7 py-5 py-md-0">
                
                <p className="login__module_logo mb-4"><img src={logoPizza} alt="Best Pizza"/></p>
                
                <div className="login__module_welcome_text pb-4 mb-2">
                    <h2 className="welcome_title">Bienvenido</h2>
                    <p className="welcome_lead">A las mejores pizzas del país</p>
                </div>

                <div className={ `login__module_form_singup  ${props.errorLogin ? 'error--form' : ''}`}>
                    <form onSubmit={props.logInPage}>
                        <div className="box__input rounded mb-3">
                            <input type="text"  name="username" placeholder="Usuario" className="input__field" onChange={props.removeErrorLogin} />
                            <img alt="icon usuer" src={iconUser} className="input__icon" />
                        </div>
                        <div className="box__input rounded">
                            <input type="password"  name="password" placeholder="Contraseña"  className="input__field" onChange={props.removeErrorLogin} />
                            <img alt="icon password" src={iconPass} className="input__icon" />
                        </div>
                        <p className={ `error__message mt-4  ${props.errorLogin ? 'd-block' : 'd-none'}`}>Usuario y/o contraseña incorrectos</p>
                        <p className="my-5"><a href="/" className="link__forgot">¿Olvidaste tu contraseña?</a></p>
                        <button type="submit" className="btn shadow btn__singup">Iniciar sesión</button>
                    </form>
                </div>

            </div>
        </div>
	</div>
);

export default login;