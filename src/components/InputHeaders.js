import { React } from 'react';
import Add from './Buttons/Add';
import EmptyCell from './EmptyCell';
import InputBoxes from './Input/InputBoxes';

const InputHeaders = (context) =>
	<tr>
		<InputBoxes { ...context }/>
		<EmptyCell/>
		<EmptyCell/>
		<EmptyCell/>
		<td>
			<Add { ...context }/>
		</td>
	</tr>;

export default InputHeaders;
