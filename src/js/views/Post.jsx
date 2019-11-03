import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
//import { Link } from "react-router-dom";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Post extends React.Component {
	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					return (
						<div className="container">
							<form
								className="post"
								onSubmit={(e) => {
									e.preventDefault();
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
									min="01/11/2019"
									max="01/01/2020"
									required
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
										id="offeredPayment"
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
