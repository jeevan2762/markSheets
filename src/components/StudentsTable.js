import { React } from 'react';
import MarkSheet from './Marksheet';
import TableHeader from './TableHeader';
import InputHeaders from './InputHeaders';
import MarkSheetManager from '../services/MarkSheetManager';

const StudentsTable = (context) => {
	const { state: { markLists }, config: { fields }} = context;

	return <div>
		<h1>Marksheet</h1>
		<table className="tableStyle">
			<thead>
				<tr>
					{fields.map((field) => TableHeader(field))}
				</tr>
				<InputHeaders { ...context }/>
			</thead>
			<tbody>
				{MarkSheetManager.addFields(markLists).map((marks) =>
					MarkSheet({ ...context, data: { marks, fields }}))}
			</tbody>
		</table>
	</div>;
};

export default StudentsTable;
