import { React } from 'react';
import Delete from './Buttons/Delete';

const MarkSheet = (context) => {
	const { data: { markSheet }, config: { fields }} = context;

	return <tr className="markSheet">
		{fields.map((field, key) =>
			<td
				key={ key }
				className="markSheet"
			>{markSheet[field.name]}</td>)}
		<Delete { ...context }/>
	</tr>;
};

export default MarkSheet;
