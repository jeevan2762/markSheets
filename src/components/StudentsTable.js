import { React } from 'react';
import addFields from '../service/studentManager';
import Input from './Input';
import tableData from './TableData';
import tableHeader from './TableHeader';

const headings = [
	'RollNo',
	'Name',
	'Tamil',
	'English',
	'Maths',
	'Science',
	'Social',
	'Total',
	'Result',
	'Rank',
];

const StudentsTable = (context) => {
	const { state: { markLists }} = context;

	return <div>
		<h1>Marksheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{headings.map(tableHeader)}
				</tr>
				<tr> <Input { ...context }/></tr>
			</thead>
			<tbody>
				{addFields(markLists).map((marks, key) =>
					tableData({ ...context, data: { marks, key }}))}
			</tbody>
		</table>
	</div>;
};

export default StudentsTable;
