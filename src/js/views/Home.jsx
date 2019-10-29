import React from 'react';
import '../../sass/main.scss';
import Task from '../component/Task';
import Navbar from '../component/Navbar';
import { Consumer } from '../store/appContext';
import CategoryList from '../component/CategoryList';
import Sidebar from '../component/Sidebar';

const Home = () => {
	return (
		<div className="App">
			<Sidebar />
			<div className="w-70">
				<Navbar />
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
		</div>
	);
};

export default Home;
