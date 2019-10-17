const baseUrl = 'http://localhost:3000/api';
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tasks: [
				{
					id: 1,
					title: "Ejemplo de una tarea",
					category: 1,
					description: "Imagina que soy una tarea",
					location: "Providencia",
					date: "12/12/19",
					payment: "10.000"
				},
				{
					id: 2,
					title: "Una segunda tarea",
					category: 3,
					description: "Soy una tarea no relacionada a la anterior",
					location: "Santiago",
					date: "23/11/19",
					payment: "15.000"
				}
			],
			categories: [
				{
					name: "Hogar",
					icon:  "couch",
					id: 1
				},
				{
					name: "Cocina",
					icon:  "utensils",
					id: 2
				},
				{
					name: "Escolares",
					icon: "school",
					id: 3
				},
				{
					name: "Mascotas",
					icon: "paw",
					id: 4
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
		
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getTasks: (category) => {
				let url = baseUrl + '/task'
				if (category !== undefined) {
					url = baseUrl + '/task/category/' + category
				} 
				
				fetch(url)
				.then(resp => resp.json())
				.then((data) => {
					setStore({ tasks: data });
				})
			}
		}
	};
};

export default getState;
