import React from 'react';
import '../../sass/main.scss';
import { NavLink } from 'react-router-dom';
import Posted from './posted';

const History = (props) => {
	return (
		<div className="w-70">
			<nav className="row">
				<h2 className="align-center">Tareas Publicadas</h2>
			</nav>
			{/* <NavLink to="/mytasks/1/posted">Tareas Publicadas </NavLink>
				<NavLink to="/mytasks/1/applied" activeClassName="selectedLink">
					Tareas Solicitadas
				</NavLink> */}
			<Posted />
		</div>
	);
};

export default History;
