import { React } from 'react';

const tableData = (context) => {
	const { data: { marks, index, headers }} = context;

	return <tr key={ index } className="rowStyle">
		{headers.map((header, key) =>
			<td
				key={ key }
				className="rowStyle"
			>{marks[header]}</td>)}
	</tr>;
};

export default tableData;
