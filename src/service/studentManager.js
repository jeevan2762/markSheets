
const passMark = 35;

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

const addFields = (student) => {
	const studentsData = student.map(processData);

	return addRank(studentsData);
};

export default addFields;
