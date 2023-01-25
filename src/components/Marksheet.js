import { React } from 'react';
import Delete from './Buttons/Delete';

const MarkSheet = (context) => {
	const { data: { marks, fields }} = context;

	return <tr className="rowStyle">
		{fields.map((field, key) =>
			<td
				key={ key }
				className="rowStyle"
			>{marks[field.name]}</td>)}
		<Delete { ...context }/>
	</tr>;
};

export default MarkSheet;
