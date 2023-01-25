import { rndString } from '@laufire/utils/random';
import { React } from 'react';

const Add = (context) => {
	const { state, setState, config: { idLength }} = context;
	const { currentMarksheet, markLists } = state;

	return (
		<div>
			<button
				onClick={ () => setState({
					...state,
					markLists: [...markLists, { ...currentMarksheet,
						id: rndString(idLength) }],
				}) }
			>Add
			</button>
		</div>);
};

export default Add;
