import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
import { withRouter } from 'react-router';

import Logo from '../component/logo';
import Input from '../component/input';
import SocialMedia from '../component/socialMedia';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends Input {
	componentDidMount() {
		let username = localStorage.getItem('username');
		let password = localStorage.getItem('password');
		console.log(username, password);
		//this.setState({ username, password });
	}

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
										localStorage.setItem('username', this.state.data.username);
										localStorage.setItem('password', this.state.data.password);
									}}
								>
									<label>Usuario:</label>
									<input
										name="username"
										value={localStorage.getItem('username')}
										onChange={this.handleChange}
									/>

									<label>Contraseña:</label>
									<input
										name="password"
										type="password"
										value={localStorage.getItem('password')}
										onChange={this.handleChange}
									/>

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
