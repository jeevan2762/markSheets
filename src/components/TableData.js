import { map, values } from '@laufire/utils/collection';
import { React } from 'react';

const tableData = (marks, index) =>
	<tr key={ index } className="rowStyle">
		{
			values(map(marks, (mark, key) =>
				<td
					key={ key }
					className="rowStyle"
				>{mark}</td>))
		}
	</tr>;

export default tableData;
