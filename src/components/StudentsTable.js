/* eslint-disable max-lines-per-function */
import { React } from 'react';
import addFields from '../service/studentManager';
import Add from './Add';
import EmptyCell from './EmptyCell';
import InputBoxes from './InputBoxes';
import tableData from './TableData';
import tableHeader from './TableHeader';

const StudentsTable = (context) => {
	const { state: { markLists }, config: { inputs, headings }} = context;

	const array = [...inputs, ...headings];

	return <div>
		<h1>Marksheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>{array.map(tableHeader)}</tr>
				<tr><InputBoxes { ...context }/>
					<EmptyCell/>
					<EmptyCell/>
					<EmptyCell/>
					<td><Add { ...context }/></td></tr>
			</thead>
			<tbody>
				{addFields(markLists).map((marks, index) =>
					tableData({ ...context, data: { marks, index }}))}
			</tbody>
		</table>
	</div>;
};

export default StudentsTable;
