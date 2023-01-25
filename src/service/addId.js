import { rndString } from '@laufire/utils/random';
import markSheets from './markSheets';

const addId = (context) => {
	const { config: { idLength }} = context;

	return markSheets.map((ele) => ({
		...ele,
		id: rndString(idLength),
	}));
};

export default addId;
