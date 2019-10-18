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
					date: "12/12/2019",
					payment: "10.000"
				},
				{
					id: 2,
					title: "Una segunda tarea",
					category: 3,
					description: "Soy una tarea no relacionada a la anterior",
					location: "Santiago",
					date: "23/11/2019",
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
			],
			cities: [
				{
					id: 1,
					name: "Las Condes"
				},
				{
					id: 2,
					name: "Providencia"
				}, 
				{
					id: 3,
					name: "Santiago"
				}, {
					id: 4,
					name: "Ñuñoa"
				}, {
					id: 5,
					name: "La Reina"
				}, {
					id: 6,
					name: "Vitacura"
				}, {
					id: 7,
					name: "Lo Barnechea"
				}, 
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			handleSubmit: (e) => {
				e.preventDefault();
				const data = new FormData(e.target);
				
				fetch('url', {
				  method: 'POST',
				  body: data,
				});
			},

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
