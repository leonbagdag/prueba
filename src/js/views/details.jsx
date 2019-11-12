import React from 'react';
import Offer from '../component/offer';
import { Consumer } from '../store/appContext';
import '../../sass/main.scss';

class Details extends React.Component {
	constructor() {
		super();
		this.store = null;
		this.actions = null;
	}

	async componentDidMount() {
		let id = parseInt(this.props.match.params.id);
		if (this.actions !== null) {
			await this.actions.getTasks();
			await this.actions.getTask(id);
		}
	}

	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					this.actions = actions;
					this.store = store;
					let task = store.currentTask[0];
					let id = parseInt(this.props.match.params.id);

					if (task !== undefined) {
						return (
							<main className="w-70">
								<header>
									<h2 className="white-text">{task.title}</h2>
								</header>
								<div className="row details">
									<div className="details__header">
										<h3>¿Cuándo?</h3>
										<p>{task.date}</p>
									</div>
									<div className="details__header details__header--middle">
										<h3>¿Dónde?</h3>
										<p>{task.location}</p>
									</div>
									<div className="details__header">
										<h3>Pago ofrecido:</h3>
										<p>$ {task.payment}</p>
									</div>
								</div>

								<div className="details__description">
									<h3>Descripción</h3>
									<p className="details__text">{task.description}</p>
								</div>

								<Offer
									id={id}
									handleOffer={actions.handleOffer}
									handleSubmit={actions.handleOfferSubmit}
									payment={task.payment}
								/>
							</main>
						);
					}

					return <h1>La tarea que buscas no existe :( </h1>;
				}}
			</Consumer>
		);
	}
}

export default Details;
