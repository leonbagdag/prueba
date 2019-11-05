import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
import { getCurrentDate, getMaxDate } from '../constants/utils';
//import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Post extends React.Component {
	store = {
		id: '',
		title: '',
		category: '',
		description: '',
		location: '',
		date: '',
		payment: ''
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
									actions.handleTaskSubmit();
									this.props.history.push('/tasks');
								}}
							>
								<legend>
									<h2>Crea una nueva tarea</h2>
								</legend>
								<label>Título</label>
								<input
									onChange={actions.handleNewTask}
									name="title"
									placeholder="Describe brevemente qué necesitas"
									required
								/>
								<label>Categoría</label>
								<select name="category" onChange={actions.handleNewTask}>
									<option value="">--Selecciona la categoría correspondiente--</option>
									{store.categories.map((category, i) => {
										return (
											<option value={category.id} key={category.id}>
												{category.name}
											</option>
										);
									})}}
								</select>
								<label>Fecha</label>
								<input
									onChange={actions.handleNewTask}
									type="date"
									name="date"
									min={today}
									max={maxDate}
									required
									onKeyDown={(e) => {
										e.preventDefault();
										return false;
									}}
								/>
								<label>Lugar</label>
								<select onChange={actions.handleNewTask} name="location">
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
									minLength="20"
									maxLength="200"
									rows="5"
									placeholder="Explica los detalles de tu tarea: en qué consiste, cuánto tiempo durará, qué esperas que se cumpla"
									required
									onChange={actions.handleNewTask}
								/>
								<label>Pago ofrecido</label>
								<div className="row">
									<span>$ </span>
									<input
										id="payment"
										name="payment"
										placeholder="ej: 10.000"
										required
										onChange={actions.handleNewTask}
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
