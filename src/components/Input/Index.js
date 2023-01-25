import React from 'react';

const Input = (context) => {
	const { state, setState, data: { field }} = context;
	const { currentMarksheet } = state;

	return (
		<input { ...{
			type: field.type,
			value: currentMarksheet[field.name],
			style: { width: '80px' },
			onChange: ({ target: { value }}) => setState({
				...state,
				currentMarksheet: {
					...currentMarksheet,
					[field.name]: field.type === 'number'
						? Number(value)
						: value,
				},
			}),
		} }
		/>);
};

export default Input;
