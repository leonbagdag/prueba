import React from 'react';
import '../../sass/main.scss';
import Category from './category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Task extends React.Component {
	render() {
		return (
			<div className="task">
				<main className="task__main">
					<Category category={this.props.category} icon={this.props.categoryIcon} />
					<section className="task__main__content">
						<div className="row task__row">
							<h3>{this.props.title}</h3>
							{/* <p>{this.props.description}</p> */}

							<aside className="task__price">
								<h5>${this.props.payment}</h5>
							</aside>
						</div>
						<footer className="task__details">
							<div>
								<FontAwesomeIcon icon="map-marker-alt" />
								<span> {this.props.location} </span>
							</div>

							<div>
								<FontAwesomeIcon icon="calendar-alt" />
								<span className="task__details__date"> {this.props.date} </span>
							</div>
						</footer>
					</section>
				</main>
			</div>
		);
	}
}

export default Task;
