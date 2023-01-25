import { rndString } from '@laufire/utils/random';
import markSheets from './markSheets';

const passMark = 35;

const genMarkSheets = (context) => {
	const { config: { idLength }} = context;

	return markSheets.map((ele) => ({
		...ele,
		id: rndString(idLength),
	}));
};

const removeMarkSheet = (context) => {
	const { state: { markLists }, data: { marks: { id }}} = context;

	return markLists.filter((markList) =>
		id !== markList.id);
};

const getTotal = ({ tamil, english, maths, science, social }) =>
	tamil + english + maths + science + social;

const getResult = (student) => (Math.min(
	student.tamil,
	student.english,
	student.maths,
	student.science,
	student.social
)
	<= passMark
	? 'fail'
	: 'pass');

const addRank = (studentDetails) => {
	let rank = 1;
	const sortStudents = studentDetails.sort((a, b) => b.total - a.total);
	const studentRank = sortStudents.map((student) => ({
		...student,
		rank: student.result === 'pass' ? rank++ : '-',
	}));

	return studentRank;
};

const processData = (student) => ({
	...student,
	total: getTotal(student),
	result: getResult(student),
});

const addFields = (student) => addRank(student.map(processData));

const MarkSheetManager = {
	addFields,
	genMarkSheets,
	removeMarkSheet,
};

export default MarkSheetManager;
