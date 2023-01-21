import { React } from 'react';

const tableData = (context) => {
	const { data: { marks, index }} = context;
	const { config: { inputs, headings }} = context;

	return <tr key={ index } className="rowStyle">
		{[...inputs, ...headings].map((header, key) =>
			<td
				key={ key }
				className="rowStyle"
			>{marks[header]}</td>)}
	</tr>;
};

export default tableData;
