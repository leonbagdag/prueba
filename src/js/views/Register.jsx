import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
const { validate, clean, format } = require('rut.js');

class Register extends React.Component {
	handleRegister = (e) => {
		e.preventDefault();
	};
	render() {
		return (
			<Consumer>
				{({ actions }) => {
					return (
						<main className="container">
							<div>
								<form className="register" onSubmit={this.handleRegister}>
									<legend>
										<h1 className="logo main-logo">Logo</h1>
									</legend>

									<label>Nombre:</label>
									<input name="name" required />

									<label>Apellido:</label>
									<input name="lastname" required />

									<label>RUT:</label>
									<input
										type="text"
										name="rut"
										required="required"
										pattern="\d{3,8}-[\d|kK]{1}"
										minLength="10"
										maxLength="12"
										title="Debe ser un Rut válido"
										onKeyUp={(e) => {
											e.target.value = format(e.target.value);
										}}
										onBlur={(e) => {
											validate(e.target.value)
												? alert('El rut es valido')
												: alert('El rut no es valido');
										}}
									/>

									<label>Email:</label>
									<input name="mail" type="email" required />

									<label>Usuario:</label>
									<input name="username" required />

									<label>Contraseña:</label>
									<input name="password" type="password" required />

									<label>Foto de perfil:</label>
									<input name="thumbnail" type="file" accept="image/*" required />

									<button
										className="large-btn"
										type="submit"
										onClick={(e) => {
											e.preventDefault();
											//this.props.history.push('/tasks');
										}}
									>
										Crear cuenta
									</button>
								</form>
							</div>
						</main>
					);
				}}
			</Consumer>
		);
	}
}

export default Register;
