const config = {
	fields: [
		{
			name: 'rollNo',
			type: 'number',
			input: true,
		},
		{
			name: 'name',
			type: 'text',
			input: true,
		},
		{
			name: 'tamil',
			type: 'number',
			input: true,
		},
		{
			name: 'english',
			type: 'number',
			input: true,
		},
		{
			name: 'maths',
			type: 'number',
			input: true,
		},
		{
			name: 'science',
			type: 'number',
			input: true,
		},
		{
			name: 'social',
			type: 'number',
			input: true,
		},
		{
			name: 'total',
			type: 'number',
			input: false,
		},
		{
			name: 'result',
			type: 'text',
			input: false,
		},
		{
			name: 'rank',
			type: 'number',
			input: false,
		},
		{
			name: 'buttons',
			type: 'text',
			input: false,
		},
	],
};

export default config;
