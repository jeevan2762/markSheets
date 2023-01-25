import { React } from 'react';
import Add from './Buttons/Add';
import InputBoxes from './Input/InputBoxes';

const InputHeaders = (context) =>
	<tr>
		<InputBoxes { ...context }/>
		<td>
			<Add { ...context }/>
		</td>
	</tr>;

export default InputHeaders;
