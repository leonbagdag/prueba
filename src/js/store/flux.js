const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tasks: [
				{
					id: 1,
					title: "Ejemplo de una tarea",
					category: "pets",
					description: "Imagina que soy una tarea",
					location: "Providencia",
					date: "12/12/19",
					payment: "10.000"
				},
				{
					id: 2,
					title: "Una segunda tarea",
					category: "homework",
					description: "Soy una tarea no relacionada a la anterior",
					location: "Santiago",
					date: "23/11/19",
					payment: "15.000"
				}
			],
			categories: [
				{
					name: "furniture",
					icon:  "couch"
				},
				{
					name: "cooking",
					icon:  "utensils"
				},
				{
					name: "homework",
					icon: "school"
				},
				{
					name: "pets",
					icon: "paw"
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
			}
		}
	};
};

export default getState;
