const iconDefault = 'star';
export const listCategories = {
	home: 'home',
	crafts: 'crafts',
	pets: 'pets',
	anything: 'anything'
};

const categoriesIcon = [
	{
		code: listCategories.home,
		icon: 'couch'
	},
	{
		code: listCategories.crafts,
		icon: 'cut'
	},
	{
		code: listCategories.pets,
		icon: 'paw'
	},
	{
		code: listCategories.anything,
		icon: 'star'
	}
];

export const getIconByCode = (code) => {
	const filtered = categoriesIcon.filter((item) => item.code.toUpperCase() === code.toUpperCase());
	if (filtered === null || filtered === undefined || filtered.length < 1) return iconDefault;

	return filtered[0].icon;
};

export const getIconById = (list, id) => {
	const filtered = list.filter((item) => item.id === id);
	if (filtered === null || filtered === undefined || filtered.length < 1) return iconDefault;

	return getIconByCode(filtered[0].code);
};

export default categoriesIcon;
