import React from 'react';
import '../../sass/main.scss';
import Menu from './Menu';

class Sidebar extends React.Component {
	render() {
		return (
			<aside className="w-30 column d-none-xs sidebar">
				<h1 className="logo">Logo</h1>
				<Menu className="sidebar__menu" />
				<button
					className="large-btn"
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						this.props.history.push('/new');
					}}
				>
					Crear tarea
				</button>
			</aside>
		);
	}
}

export default Sidebar;
