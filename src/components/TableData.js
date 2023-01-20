import { map, values } from '@laufire/utils/collection';
import { React } from 'react';

const tableData = (context) => {
	const { data: { marks, index }} = context;

	return <tr key={ index }>
		{
			values(map(marks, (mark, key) =>
				<td
					key={ key }
					className="rowStyle"
				>{mark}</td>))
		}
	</tr>;
};

export default tableData;
