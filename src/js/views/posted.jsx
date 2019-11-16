import React from 'react';
import '../../sass/main.scss';
import Task from '../component/task';
import { getIconById } from '../constants/categories';
import { Consumer } from '../store/appContext';
import { Link } from 'react-router-dom';

const Posted = (props) => {
	return (
		<div className="w-70">
			<Consumer>
				{({ store, actions }) => {
					let { tasks, account } = store;
					return tasks.filter((task) => task.userId === account.id).map((task) => {
						return (
							<article className="task-holder" key={task.id}>
								<Task
									id={task.id}
									title={task.title}
									description={task.description}
									category={task.category}
									location={task.location}
									date={task.date}
									onClick={() => props.history.push(`/tasks/${task.id}`)}
									categoryIcon={getIconById(store.categories, task.category)}
								/>
								<aside>
									<Link to={`/applications`}>
										<button>Postulaciones</button>
									</Link>
								</aside>
							</article>
						);
					});
				}}
			</Consumer>
		</div>
	);
};

export default Posted;
