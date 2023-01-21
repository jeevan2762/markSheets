import { React } from 'react';
import addFields from '../service/studentManager';
import tableData from './TableData';
import tableHeader from './TableHeader';
import TableRows from './TableRows';

const StudentsTable = (context) => {
	const { state: { markLists }, config: { inputs, headings }} = context;
	const headers = [...inputs, ...headings];

	return <div>
		<h1>Marksheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>{headers.map(tableHeader)}</tr>
				<TableRows { ...context }/>
			</thead>
			<tbody>
				{addFields(markLists).map((marks, index) =>
					tableData({ ...context, data: { marks, index, headers }}))}
			</tbody>
		</table>
	</div>;
};

export default StudentsTable;
