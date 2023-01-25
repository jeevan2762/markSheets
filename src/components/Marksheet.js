import { React } from 'react';
import Delete from './Buttons/Delete';

const MarkSheet = (context) => {
	const { data: { markSheet }, config: { fields }} = context;

	return <tr className="rowStyle">
		{fields.map((field, key) =>
			<td
				key={ key }
				className="rowStyle"
			>{markSheet[field.name]}</td>)}
		<Delete { ...context }/>
	</tr>;
};

export default MarkSheet;
