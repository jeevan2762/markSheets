import { React } from 'react';
import addFields from '../service/studentManager';
import Add from './Add';
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
	'Buttons',
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
				<tr> <Input { ...context }/>
					<td/><td/><td/>
					<td><Add { ...context }/></td></tr>
			</thead>
			<tbody>
				{addFields(markLists).map(tableData)}
			</tbody>
		</table>
	</div>;
};

export default StudentsTable;
