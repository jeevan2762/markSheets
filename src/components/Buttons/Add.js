import { React } from 'react';

const Add = (context) => {
	const { state, setState } = context;
	const { currentMarksheet, markLists } = state;

	return (
		<div>
			<button
				onClick={ () => setState({
					...state,
					markLists: [...markLists, currentMarksheet],
				}) }
			>Add
			</button>
		</div>);
};

export default Add;
