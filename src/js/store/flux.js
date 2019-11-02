//const baseUrl = 'http://localhost:3000/api';
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tasks: [],
			categories: [
				{
					code: 'home',
					name: 'Hogar',
					id: 1
				},
				{
					code: 'events',
					name: 'Eventos',
					id: 2
				},
				{
					code: 'errands',
					name: 'Trámites',
					id: 3
				},
				{
					code: 'paperwork',
					name: 'Papeleo',
					id: 4
				},
				{
					code: 'crafts',
					name: 'A mano',
					id: 5
				},
				{
					code: 'pets',
					name: 'Mascotas',
					id: 6
				},
				{
					code: 'anything',
					name: 'Otras',
					id: 7
				}
			],
			cities: [
				{
					id: 1,
					name: 'Las Condes'
				},
				{
					id: 2,
					name: 'Providencia'
				},
				{
					id: 3,
					name: 'Santiago'
				},
				{
					id: 4,
					name: 'Ñuñoa'
				},
				{
					id: 5,
					name: 'La Reina'
				},
				{
					id: 6,
					name: 'Vitacura'
				},
				{
					id: 7,
					name: 'Lo Barnechea'
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			/*handleSubmit: (e) => {
				e.preventDefault();
				const data = new FormData(e.target);

				fetch('url', {
					method: 'POST',
					body: data
				});
			},*/

			getCategories: () => {
				let store = getStore();
				let categories = [ { code: 'all', name: 'Todas' }, ...store.categories ];
				setStore({ categories });
			},

			getTasks: (category) => {
				/* let url = baseUrl + '/task'
				if (category !== undefined) {
					url = baseUrl + '/task/category/' + category
				} 
				
				fetch(url)
				.then(resp => resp.json())
				.then((data) => {
					setStore({ tasks: data });
				}) */

				//let urlEndpoint = 'api/tasks';

				const dataJson = require('./data/sample.json');
				setStore({ tasks: dataJson });

				if (category !== undefined) {
					const store = getStore();
					let tasks = store.tasks;
					tasks = store.tasks.filter((task) => task.category === category);
					console.log(tasks);
					setStore({ tasks });
					//urlEndpoint += '/category/' + category;
				} else {
					console.log('todas las tareas');
				}

				/*
				fetch(urlEndpoint).then((resp) => resp.json()).then((data) => {
					setStore({ tasks: data });
				});
				*/
			},
			handleTaskSubmit: (e) => {
				e.preventDefault();
				const store = getStore();
				//let tasks = store.tasks;
				console.log(e);
			}
		}
	};
};

export default getState;
