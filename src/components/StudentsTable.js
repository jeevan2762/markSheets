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
				{MarkSheetManager.addFields(markLists).map((markSheet) =>
					MarkSheet({ ...context, data: { markSheet }}))}
			</tbody>
		</table>
	</div>;
};

export default StudentsTable;
