import React from 'react';
import '../../sass/main.scss';
import Task from '../component/Task';
import { Consumer } from '../store/appContext';
import CategoryList from '../component/CategoryList';

const Home = () => {
	return (
		<div className="w-70">
			<CategoryList />
			<Consumer>
				{({ store, actions }) => {
					return store.tasks.map((task, i) => {
						return (
							<Task
								title={task.title}
								description={task.description}
								category={task.category}
								location={task.location}
								date={task.date}
								payment={task.payment}
								key={task.id}
							/>
						);
					});
				}}
			</Consumer>
		</div>
	);
};

export default Home;
