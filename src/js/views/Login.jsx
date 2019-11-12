import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
import { withRouter } from 'react-router';

import Logo from '../component/logo';
import Input from '../component/input';
import SocialMedia from '../component/socialMedia';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends Input {
	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					this.store = store;
					this.actions = actions;
					return (
						<div className="container alpha-bg">
							<main>
								<header className="full-logo">
									<FontAwesomeIcon icon="thumbtack" size="lg" />
									<Logo />
								</header>

								<form
									className="login"
									onSubmit={(e) => {
										e.preventDefault();
										actions.handleLogin(this.state.data);
										this.props.history.push('/tasks');
									}}
								>
									{this.renderInput('username', 'Usuario:')}
									{this.renderInput('password', 'Contraseña:', 'password')}
									{this.renderButton('Ingresar')}
								</form>
								<SocialMedia />
							</main>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default withRouter(Login);
