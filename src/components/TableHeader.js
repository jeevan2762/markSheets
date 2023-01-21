import { React } from 'react';

const TableHeader = (details, index) =>
	<th key={ index } className="headerStyle">{details}</th>;

export default TableHeader;
