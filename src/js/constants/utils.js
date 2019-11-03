export function getCurrentDate() {
	let newDate = new Date();
	let day = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();

	return `${day}/${month}/${year}`;
}

export function formatDate(value) {
	let newDate = new Date(value);
	let day = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();

	return `${day}/${month}/${year}`;
}
