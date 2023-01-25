/* eslint-disable max-lines-per-function */
import React from 'react';
import Input from './Index';

const InputBoxes = (context) => {
	const { config: { fields }} = context;

	return fields.map((field, key) =>
		<td key={ key }>
			{field.input === true
				?	<td>
					<Input { ...{ ...context, data: { field }} }/>
				</td>
				: ''}
		</td>);
};

export default InputBoxes;
