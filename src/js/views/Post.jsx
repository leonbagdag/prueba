import React from 'react';
import '../../sass/main.scss';
import { Consumer } from '../store/appContext';
import { getCurrentDate, getMaxDate } from '../constants/utils';
//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
								<div className={this.state.errors.title !== undefined ? 'error' : 'display-none'}>
									<FontAwesomeIcon icon="exclamation-circle" /> {this.state.errors.title}
								</div>

								<label>Categoría</label>
								<select name="category" onChange={this.handleChange} onBlur={this.validation}>
									<option value="">--Selecciona la categoría correspondiente--</option>
									{store.categories
										.filter((category) => category.name !== 'Todas')
										.map((category, i) => {
											return (
												<option value={category.id} key={category.id}>
													{category.name}
												</option>
											);
										})}}
								</select>
								<div className={this.state.errors.category !== undefined ? 'error' : 'display-none'}>
									<FontAwesomeIcon icon="exclamation-circle" /> {this.state.errors.category}
								</div>

								{this.renderInput(
									'date',
									'Fecha:',
									'date',
									today,
									today,
									maxDate,
									today,
									this.hideCalendar
								)}
								<div className={this.state.errors.date !== undefined ? 'error' : 'display-none'}>
									<FontAwesomeIcon icon="exclamation-circle" /> {this.state.errors.date}
								</div>

								<label>Lugar</label>
								<select onChange={this.handleChange} onBlur={this.validation} name="location">
									<option value="">--Selecciona la comuna donde ocurrirá la tarea--</option>
									{store.cities.map((city) => {
										return (
											<option value={city.name} key={city.id}>
												{city.name}
											</option>
										);
									})}}
								</select>
								<div className={this.state.errors.location !== undefined ? 'error' : 'display-none'}>
									<FontAwesomeIcon icon="exclamation-circle" /> {this.state.errors.location}
								</div>

								<label>Descripción</label>
								<textarea
									name="description"
									minLength="10"
									maxLength="200"
									rows="5"
									placeholder="Explica los detalles de tu tarea: en qué consiste, cuánto tiempo durará, qué esperas que se cumpla"
									onChange={this.handleChange}
									onBlur={this.validation}
								/>
								<div className={this.state.errors.description !== undefined ? 'error' : 'display-none'}>
									<FontAwesomeIcon icon="exclamation-circle" /> {this.state.errors.description}
								</div>

								<label>Pago ofrecido</label>
								<div className="row">
									<span>$ </span>

									<input
										className="payment"
										name="payment"
										placeholder="ej: 10.000"
										onChange={this.handleChange}
										onBlur={this.validation}
									/>
								</div>
								<div className={this.state.errors.payment !== undefined ? 'error' : 'display-none'}>
									<FontAwesomeIcon icon="exclamation-circle" /> {this.state.errors.payment}
								</div>

								{Object.keys(this.state.data).length === 6 &&
								Object.keys(this.state.errors).length === 0 ? (
									this.renderSubmitButton()
								) : (
									this.renderDisabledButton()
								)}

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
