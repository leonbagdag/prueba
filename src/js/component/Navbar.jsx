import React from 'react';
import '../../sass/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Menu from './Menu';

class Navbar extends React.Component {
	render() {
		return (
			<nav className="d-none-md">
				<div id="menuToggle">
					<input type="checkbox" />
					<span />
					<span />
					<span />

					<Menu className="menu" />
				</div>

				<h1 className="logo">Logo</h1>

				<Link to="/new">
					<FontAwesomeIcon icon="edit" size="lg" />
				</Link>
			</nav>
		);
	}
}

export default Navbar;
