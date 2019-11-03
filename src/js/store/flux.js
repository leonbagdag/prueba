//const baseUrl = 'http://localhost:3000/api';
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			account: {
				username: '',
				password: ''
			},
			tasks: [],
			newTask: {
				id: '',
				title: '',
				category: '',
				description: '',
				location: '',
				date: '',
				payment: ''
			},
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
				let categories = [ ...store.categories ];
				if (categories.length < 8) categories = [ { id: 0, code: 'all', name: 'Todas' }, ...store.categories ];
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
				const store = getStore();
				let tasks = store.tasks;
				let newTask = store.newTask;
				tasks = newTask.id !== '' ? [ ...tasks, newTask ] : tasks;

				if (category > 0) {
					tasks = tasks.filter((task) => task.category === category);
					console.log(tasks);
					setStore({ tasks });
					//urlEndpoint += '/category/' + category;
				}

				/*
				fetch(urlEndpoint).then((resp) => resp.json()).then((data) => {
					setStore({ tasks: data });
				});
				*/

				setStore({ tasks, newTask });
			},
			handleChange: (e) => {
				let store = getStore();
				let account = store.account;
				account[e.currentTarget.name] = e.currentTarget.value;
				setStore({ account });
				console.log(account);
			},
			handleNewTask: (e) => {
				let store = getStore();
				let actions = getActions();
				actions.getTasks();

				let index = store.tasks.length + 1;
				let newTask = store.newTask;
				let name = e.currentTarget.name;
				let value = e.currentTarget.value;

				newTask = {
					...newTask,
					id: index,
					[name]: e.currentTarget.name === 'category' ? parseInt(value) : value
				};

				let tasks = [ ...store.tasks, newTask ];

				setStore({ newTask, tasks });

				console.log(tasks);
			},
			handleSubmit: (e) => {
				e.preventDefault();
				const store = getStore();
				let tasks = store.tasks;

				setStore({ tasks });
			}
		}
	};
};

export default getState;
