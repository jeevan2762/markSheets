import { React } from 'react';
import addFields from '../service/studentManager';
import MarkSheet from './Marksheet';
import TableHeader from './TableHeader';
import InputHeaders from './InputHeaders';

const StudentsTable = (context) => {
	const { state: { markLists }, config: { inputs, headings }} = context;
	const headers = [...inputs, ...headings];

	return <div>
		<h1>Marksheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{headers.map(TableHeader)}
				</tr>
				<InputHeaders { ...context }/>
			</thead>
			<tbody>
				{addFields(markLists).map((marks, index) =>
					MarkSheet({ ...context, data: { marks, index, headers }}))}
			</tbody>
		</table>
	</div>;
};

export default StudentsTable;
