import React from 'react';
import Offer from '../component/offer';
import { Consumer } from '../store/appContext';
import '../../sass/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Details extends React.Component {
	/* localActions = null;

	componentDidMount() {
		let id = this.props.match.params.id;
		if (localActions !== null) {
			localActions.getTasks();
			localActions.getTask(id);
		}
		console.log(localActions);
	} */

	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					//localActions = actions;
					let id = this.props.match.params.id - 1;
					let tasks = store.tasks;
					let filtered = tasks.filter((task) => id === task.id);
					console.log(filtered, id);

					return (
						<main className="w-70">
							<header>
								<h2 className="white-text">{tasks[id].title}</h2>
							</header>
							<div className="row details">
								<div className="details__date">
									<h3>¿Cuándo?</h3>
									<p>{tasks[id].date}</p>
								</div>
								<div className="details__location">
									<h3>¿Dónde?</h3>
									<p>{tasks[id].location}</p>
								</div>
								<div className="details__pin">
									<FontAwesomeIcon icon="map-marker-alt" />
									<p className="white-text">Mapa</p>
								</div>
							</div>
							<main className="details__description">
								<div className="row details__title">
									<h3>Descripción</h3>
									<div className="details__price">
										<small>Pago ofrecido</small>
										<h3>$ {tasks[id].payment}</h3>
									</div>
								</div>
								<p className="details__text">{tasks[id].description}</p>
							</main>
							<Offer
								id={id}
								handleOffer={actions.handleOffer}
								handleSubmit={actions.handleSubmitOffer}
								payment={tasks[id].payment}
							/>
						</main>
					);
				}}
			</Consumer>
		);
	}
}

export default Details;
