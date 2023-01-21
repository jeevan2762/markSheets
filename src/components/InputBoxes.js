import React from 'react';

const InputBoxes = (context) => {
	const { state, setState, config: { inputs }} = context;
	const { currentMarksheet } = state;

	return inputs.map((header, key) =>
		<td key={ key }>
			<input { ...{ type: 'text',
				value: currentMarksheet[header],
				style: { width: '80px' },
				onChange: ({ target: { value }}) => setState({
					...state,
					currentMarksheet: {
						...currentMarksheet,
						[header]: header !== 'name' ? Number(value) : value,
					},
				}) } }
			/>
		</td>);
};

export default InputBoxes;
