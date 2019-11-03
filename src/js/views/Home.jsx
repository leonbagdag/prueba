import React from 'react';
import '../../sass/main.scss';
import Task from '../component/task';
import { Consumer } from '../store/appContext';
import CategoryList from '../component/categoryList';

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
								key={i}
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
