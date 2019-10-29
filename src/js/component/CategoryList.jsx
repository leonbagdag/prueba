import React, { useEffect } from 'react';
import '../../sass/main.scss';
import Category from '../component/Category';
import { Consumer } from '../store/appContext';

const CategoryList = () => {
	let myActions = null;
	useEffect(() => {
		// COMPONENT DID MOUNT
		if (myActions !== null) {
			myActions.getTasks();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="row centered border-bottom">
			<section className="category-list">
				<Consumer>
					{({ store, actions }) => {
						myActions = actions;
						return store.categories.map((category, i) => {
							return (
								<div
									icon={category.icon}
									className="category-list__icon"
									key={i}
									onClick={(e) => {
										actions.getTasks(category.id);
									}}
								>
									<Category category={category.id} />
									<h5>{category.name}</h5>
								</div>
							);
						});
					}}
				</Consumer>
			</section>
		</div>
	);
};

export default CategoryList;
