import React from 'react';
import '../../sass/main.scss';

import { Consumer } from '../store/appContext';

const Applied = () => {
	return (
		<div className="w-70">
			<h2>Postulaciones recibidas</h2>
			<Consumer>
				{({ store, actions }) => {
					if (store.offers.length === 0) return <h3>No has recibido postulaciones todavía</h3>;
					return store.offers.map((offer, i) => {
						return (
							<div>
								<p>{store.tasks[offer.taskId - 1].title}</p>
								<b>@{store.account.username} postuló para realizar esta tarea:</b>
								<p>{offer.description}</p>
								<b>Pago esperado:</b>
								<p>${offer.payment}</p>
								<button>Aceptar</button>
							</div>
						);
					});
				}}
			</Consumer>
		</div>
	);
};

export default Applied;
