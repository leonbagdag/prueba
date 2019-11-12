import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
import { withRouter } from 'react-router';

import Logo from '../component/logo';
import Input from '../component/input';
import SocialMedia from '../component/socialMedia';

class Login extends Input {
	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					this.store = store;
					this.actions = actions;
					return (
						<div className="container alpha-bg">
							<div>
								<form
									className="login"
									onSubmit={(e) => {
										e.preventDefault();
										actions.handleLogin(this.state.data);
										this.props.history.push('/tasks');
									}}
								>
									<Logo className="text-center" />

									{this.renderInput('username', 'Usuario:')}
									{this.renderInput('password', 'Contraseña:', 'password')}
									{this.renderButton('Ingresar')}
								</form>
								<SocialMedia />
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default withRouter(Login);
