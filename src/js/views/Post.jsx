import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
import { getCurrentDate, getMaxDate } from '../constants/utils';
//import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from '../component/input';

class Post extends Input {
	hideCalendar = (e) => {
		e.preventDefault();
		return false;
	};

	render() {
		let today = getCurrentDate();
		let maxDate = getMaxDate();

		return (
			<Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<form
								className="post"
								onSubmit={(e) => {
									e.preventDefault();
									actions.handleTaskSubmit(this.state.data);
									this.props.history.push('/tasks');
								}}
							>
								<legend>
									<h2>Crea una nueva tarea</h2>
								</legend>

								{this.renderInput('title', 'Título:', 'text', 'Describe brevemente qué necesitas')}

								<label>Categoría</label>
								<select name="category" onChange={this.handleChange}>
									<option value="">--Selecciona la categoría correspondiente--</option>
									{store.categories.map((category, i) => {
										return (
											<option value={category.id} key={category.id}>
												{category.name}
											</option>
										);
									})}}
								</select>

								{this.renderInput(
									'date',
									'Fecha:',
									'date',
									'Selecciona la fecha de tu tarea',
									today,
									maxDate,
									this.hideCalendar
								)}

								<label>Lugar</label>
								<select onChange={this.handleChange} name="location">
									<option value="">--Selecciona la comuna donde ocurrirá la tarea--</option>
									{store.cities.map((city) => {
										return (
											<option value={city.name} key={city.id}>
												{city.name}
											</option>
										);
									})}}
								</select>
								<label>Descripción</label>
								<textarea
									name="description"
									minLength="10"
									maxLength="200"
									rows="5"
									placeholder="Explica los detalles de tu tarea: en qué consiste, cuánto tiempo durará, qué esperas que se cumpla"
									required
									onChange={this.handleChange}
								/>
								<label>Pago ofrecido</label>
								<div className="row">
									<span>$ </span>

									<input
										className="payment"
										name="payment"
										placeholder="ej: 10.000"
										required
										onChange={this.handleChange}
									/>
								</div>

								<button className="large-btn" type="submit">
									Enviar
								</button>
								<div className="row go-back">
									<small className="link" onClick={this.props.history.goBack}>
										Volver atrás
									</small>
								</div>
							</form>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Post;
