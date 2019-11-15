import React, { useState } from 'react';
import '../../sass/main.scss';

import { Consumer } from '../store/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Account = () => {
	const [ phonenumber, setPhonenumber ] = useState({
		text: '56 9 657 477 55'
	});

	const [ email, setEmail ] = useState({
		text: 'cflastra@uc.cl'
	});

	const [ password, setPassword ] = useState({
		text: '*******'
	});

	const [ display, setDisplay ] = useState(true);

	const handleDisplay = () => {
		console.log(display);
		if (display === false) return setDisplay(true);
		else setDisplay(false);
	};

	const handleOnChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		switch (name) {
			case 'phonenumber':
				setPhonenumber({ value });
				break;
		}
	};

	return (
		<div className="w-70">
			<Consumer>
				{({ store, actions }) => {
					return (
						<div className="user">
							<header className="user__card">
								<img
									className="thumbnail"
									src="https://avatars1.githubusercontent.com/u/49383737?s=460&v=4"
									alt=""
								/>
								<h2>Constanza Lastra</h2>
								<h3>@conilastra</h3>
							</header>

							<main className="user__data">
								<div className="user__data__container">
									<h5>Teléfono:</h5>
									<div className="user__data__container__edit">
										<span className={display ? 'show' : 'hide'}>{`+${phonenumber.text}`}</span>
										<input
											className={!display ? 'show' : 'hide'}
											type="text"
											placeholder={`+${phonenumber.text}`}
											name="phonenumber"
											onChange={(e) => handleOnChange(e)}
										/>
									</div>
								</div>
								<div className="user__data__container">
									<h5>Email:</h5>
									<div className="user__data__container__edit">
										<span className={display ? 'show' : 'hide'}>{email.text}</span>
										<input
											className={!display ? 'show' : 'hide'}
											type="text"
											placeholder={email.text}
											name="email"
										/>
									</div>
								</div>
								<div className="user__data__container">
									<h5>Contraseña:</h5>
									<div className="user__data__container__edit">
										<span className={display ? 'show' : 'hide'}>********</span>
										<input
											className={!display ? 'show' : 'hide'}
											type="password"
											placeholder="******"
											name="password"
										/>
									</div>
								</div>
								<button className={display ? 'show' : 'hide'}>
									Editar <FontAwesomeIcon onClick={() => handleDisplay()} icon="pencil-alt" />
								</button>
								<button className={!display ? 'show' : 'hide'}>Guardar</button>
							</main>
						</div>
					);
				}}
			</Consumer>
		</div>
	);
};

export default Account;
