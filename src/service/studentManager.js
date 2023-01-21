import { rndString } from '@laufire/utils/random';

const passMark = 35;
const idLength = 5;
const getTotal = (student) => {
	const { tamil, english, maths, science, social } = student;

	return	Number(tamil)
	+ Number(english)
	+ Number(maths)
	+ Number(science)
	+ Number(social);
};

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
	id: rndString(idLength),
});

const addFields = (student) => {
	const studentsData = student.map(processData);

	return addRank(studentsData);
};

export default addFields;
