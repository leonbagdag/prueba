import React, { useEffect } from 'react';
import '../../sass/main.scss';
import Task from '../component/Task';
import { Consumer } from '../store/appContext';
import CategoryList from '../component/CategoryList';

import { getIconById } from '../constants/categories';

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
								categoryIcon={getIconById(store.categories, task.category)}
							/>
						);
					});
				}}
			</Consumer>
		</div>
	);
};

export default Home;
