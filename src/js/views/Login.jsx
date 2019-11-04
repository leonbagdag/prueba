import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../component/logo';
import Input from '../component/input';
import { withRouter } from 'react-router';

class Login extends React.Component {
	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					return (
						<div className="container alpha-bg">
							<div>
								<form
									className="login"
									onSubmit={(e) => {
										e.preventDefault();
										this.props.history.push('/tasks');
									}}
								>
									<legend>
										<Logo />
									</legend>

									<Input
										name="username"
										label="Usuario:"
										value={store.account.username}
										onChange={actions.handleLogin}
										type="text"
									/>

									<Input
										name="password"
										label="Contraseña:"
										value={store.account.password}
										onChange={actions.handleLogin}
										type="password"
									/>

									<button className="large-btn" type="submit" required>
										Ingresar
									</button>
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

export default withRouter(Login);
