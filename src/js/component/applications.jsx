import React, { useState } from 'react';
import '../../sass/main.scss';

import { Consumer } from '../store/appContext';

const Applied = () => {
	const [ display ] = useState(true);

	/* const handleDisplay = () => {
		if (display === false) return setDisplay(true);
		else setDisplay(false);
	}; */

	return (
		<div className="w-70">
			<nav>
				<h2>Postulaciones recibidas</h2>
			</nav>

			<Consumer>
				{({ store, actions }) => {
					//if (store.offers.length === 0) return <h3>No has recibido postulaciones todavía</h3>;
					return store.users.filter((user) => user.id !== 1).map((user) => {
						return (
							<div className="application border-bottom" key={user.id}>
								<div className="application__card">
									<h3>
										{user.name} {user.lastname}
									</h3>
									<p>@{user.username}</p>
									<blockquote>
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem numquam deserunt
										ullam neque ad nulla modi odio accusamus. Inventore consequatur quas minima
										maxime voluptatibus soluta velit non id provident sunt!"
									</blockquote>
								</div>
								<div>
									<button
										className={display ? 'show' : 'hide'}
										value={user.id}
										onClick={(e) => {
											let currentUser = store.users.filter(
												(user) => user.id === parseInt(e.target.value)
											);
											console.log(currentUser);
											//handleDisplay(currentUser)
										}}
									>
										Elegir
									</button>
								</div>
							</div>
						);
					});
				}}
			</Consumer>
		</div>
	);
};

export default Applied;
