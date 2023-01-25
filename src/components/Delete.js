import React from 'react';
import filterData from '../service/filterData';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				markLists: filterData(context),
			}) }
		>Delete</button>);
};

export default Delete;
