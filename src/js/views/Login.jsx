import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../component/logo';

class Login extends React.Component {
	render() {
		return (
			<Consumer>
				{({ actions }) => {
					return (
						<div className="container alpha-bg">
							<div>
								<form className="login">
									<legend>
										<Logo />
									</legend>
									<label>Usuario:</label>
									<input min="4" max="10" name="user" required />

									<label>Contraseña:</label>
									<input name="password" type="password" required />

									<Link to="/tasks">
										<button className="large-btn" type="submit" required>
											Ingresar
										</button>
									</Link>
								</form>
								<section className="social-media">
									<p>o inicia sesión con:</p>
									<div className="row social-media__buttons">
										<button className="social-media-btn facebook" type="submit">
											<FontAwesomeIcon icon={[ 'fab', 'facebook-f' ]} />
										</button>
										<button className="social-media-btn google" type="submit">
											<FontAwesomeIcon icon={[ 'fab', 'google' ]} />
										</button>
									</div>
									<div className="login__outro">
										<small>
											¿No tienes cuenta?{' '}
											<Link to="/register">
												<span className="link">Crea una aquí</span>
											</Link>
										</small>
									</div>
								</section>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Login;
