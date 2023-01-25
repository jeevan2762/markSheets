import { React, useState } from 'react';
import './App.scss';
import StudentsTable from './components/StudentsTable';
import MarkSheetManager from './services/MarkSheetManager';

const getInitialMarkSheet = (context) => ({
	markLists: MarkSheetManager.genMarkSheets(context),
	currentMarksheet: {
		rollNo: 15,
		name: 'jee',
		tamil: 80,
		english: 98,
		maths: 75,
		science: 85,
		social: 90,
	},
});

const App = (context) => {
	const [state, setState] = useState(getInitialMarkSheet(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App" role="App">
		<StudentsTable { ...extendedContext }/>
	</div>;
};

export default App;
