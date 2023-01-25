import React from 'react';
import MarkSheetManager from '../services/MarkSheetManager';

const Delete = (context) => {
	const { state, setState } = context;

	return (
		<button
			onClick={ () => setState({
				...state,
				markLists: MarkSheetManager.removeMarkSheet(context),
			}) }
		>Delete</button>);
};

export default Delete;
