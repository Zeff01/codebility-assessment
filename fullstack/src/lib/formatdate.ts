export const formatDate = (date: string) => {
	let newDate = new Date(date);

	return newDate.toString().slice(4, 16);
};
