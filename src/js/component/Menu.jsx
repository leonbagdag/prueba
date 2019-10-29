import React from 'react';
import '../../sass/main.scss';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
	render() {
		return (
			<ul className={this.props.className}>
				<Link to="/tasks">
					<li>Inicio</li>
				</Link>
				<Link to="/account">
					<li>Mi cuenta</li>
				</Link>
				<Link to="/mytasks">
					<li>Mis tareas</li>
				</Link>
				<Link to="/">
					<li className="bottom">Cerrar sesión</li>
				</Link>
			</ul>
		);
	}
}

export default Menu;
