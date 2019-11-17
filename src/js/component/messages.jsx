import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ChosenMessage = (props) => {
	return (
		<main>
			<header className="success">
				<p>
					<FontAwesomeIcon icon="star" /> Fuiste la persona elegida para completar esta tarea.
				</p>
			</header>

			<div className="user-details">
				<p>
					Coordina los detalles con
					<b> {props.user}</b>:
				</p>
				<ul>
					<li>
						<FontAwesomeIcon icon="phone-alt" className="brand-text" /> {props.email}
					</li>
					<li>
						<FontAwesomeIcon icon="envelope" className="brand-text" /> {props.phone}
					</li>
				</ul>
			</div>
		</main>
	);
};

export const PendingMessage = () => {
	return (
		<main className="pending">
			<p>
				<FontAwesomeIcon icon="hourglass-half" /> Ya postulaste a esta tarea. Debes esperar los resultados.
			</p>
		</main>
	);
};
