import { React, useState } from 'react';
import './App.scss';
import Add from './components/Add';
import StudentsTable from './components/StudentsTable';
import markSheets from './service/markSheets';

const initialMarks = {
	markLists: markSheets,
	currentMarksheet: {
		rollNo: '',
		name: '',
		tamil: '',
		english: '',
		maths: '',
		science: '',
		social: '',
	},
};

const App = (context) => {
	const [state, setState] = useState(initialMarks);
	const extendedContext = { ...context, state, setState };

	return <div className="App" role="App">
		<StudentsTable { ...extendedContext }/>
		<Add { ...extendedContext }/>
	</div>;
};

export default App;
