const filterData = (context) => {
	const { state: { markLists }, data: { marks: { id }}} = context;

	return markLists.filter((markList) =>
		id !== markList.id);
};

export default filterData;
