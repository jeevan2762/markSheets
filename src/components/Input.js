import React from 'react';

const Input = (context) => {
	const { state, setState, config: { headers }} = context;
	const { currentMarksheet } = state;

	return headers.map((header, key) => <td key={ key }>
		<label>{header}</label>
		<input
			type="text"
			style={ { width: '60px' } }
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
