import React from 'react';
import '../../sass/main.scss';

import { Consumer } from '../store/appContext';

const TaskApplication = () => {
	return (
		<div className="w-70">
			<h2>Postulaciones recibidas</h2>
			<Consumer>
				{({ store, actions }) => {
					if (store.offers.length === 0) return <h3>No has recibido postulaciones todavía</h3>;
					return store.offers.map((offer, i) => {
						return (
							<div className="row">
								<div>
									<img src="" alt="" />
								</div>
								<div>
									<b>{store.account.username}</b>
									<blockquote>{offer.description}</blockquote>
									<b>Pago esperado:</b>
									<p>${offer.payment}</p>
								</div>
								<button>Aceptar</button>
							</div>
						);
					});
				}}
			</Consumer>
		</div>
	);
};

export default TaskApplication;
