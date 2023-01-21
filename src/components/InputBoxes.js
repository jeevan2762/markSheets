import React from 'react';

const InputBoxes = (context) => {
	const { state, setState, config: { inputs }} = context;
	const { currentMarksheet } = state;

	return inputs.map((header, key) => <td key={ key }>
		<input
			type="text"
			value={ currentMarksheet[header] }
			placeholder={ header }
			style={ { width: '80px' } }
			onChange={ (event) => setState({
				...state,
				currentMarksheet: {
					...currentMarksheet,
					[header]: event.target.value,
				},
			}) }
		/>
	</td>);
};

export default InputBoxes;
