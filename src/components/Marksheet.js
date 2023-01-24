import { React } from 'react';

const MarkSheet = (context) => {
	const { data: { marks, fields }} = context;

	return <tr className="rowStyle">
		{fields.map((field, key) =>
			<td
				key={ key }
				className="rowStyle"
			>{marks[field.name]}</td>)}
	</tr>;
};

export default MarkSheet;
