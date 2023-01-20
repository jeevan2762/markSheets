import React from 'react';

const Input = (context) => {
	const { state, setState, config: { headers }} = context;
	const { currentMarksheet } = state;

	return headers.map((header, key) => <td key={ key }>
		<input
			type="text"
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

export default Input;
