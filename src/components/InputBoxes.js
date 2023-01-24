import React from 'react';

const InputBoxes = (context) => {
	const { state, setState, config: { fields }} = context;
	const { currentMarksheet } = state;

	return fields.map((field, key) =>
		<td key={ key }>
			<input { ...{ type: field.type,
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
				}) } }
			/>
		</td>);
};

export default InputBoxes;
