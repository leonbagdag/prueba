//const baseUrl = 'http://localhost:3000/api';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			account: {
				username: '',
				password: ''
			},
			tasks: [],
			currentTask: {},
			newTask: {
				id: '',
				title: '',
				category: '',
				description: '',
				location: '',
				date: '',
				payment: ''
			},
			offers: [],
			newOffer: {
				description: '',
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
			getCategories: () => {
				let store = getStore();
				let categories = [ ...store.categories ];
				if (categories.length < 8) categories = [ { id: 0, code: 'all', name: 'Todas' }, ...store.categories ];
				setStore({ categories });
			},
			getTask: (id) => {
				const store = getStore();
				let tasks = store.tasks;
				let task = tasks.filter((item) => item.id === id);
				setStore({ currentTask: task });
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
				const store = getStore();
				let tasks = store.tasks;

				if (tasks.length === 0) {
					tasks = [ ...dataJson ];
					setStore({ tasks });
				}

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
			},
			handleLogin: (state) => {
				let account = state;
				setStore({ account });
			},
			handleTaskSubmit: (state) => {
				let newTask = state;
				let store = getStore();
				let tasks = store.tasks;
				let index = tasks.length + 1;

				newTask = {
					id: index,
					...newTask
				};
				tasks = [ ...tasks, newTask ];

				setStore({ tasks });
			},
			handleOffer: (e) => {
				let store = getStore();
				let newOffer = store.newOffer;

				newOffer[e.currentTarget.name] = e.currentTarget.value;

				setStore({ newOffer });
			},

			handleOfferSubmit: (taskId) => {
				let store = getStore();
				let newOffer = store.newOffer;
				let offers = store.offers;
				newOffer.taskId = taskId;

				offers = [ ...offers, newOffer ];
				setStore({ offers });
			}
		}
	};
};

export default getState;
