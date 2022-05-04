// Components
import { Table } from "../";

type OpeningHs = {
	day: number;
	label: string;
	ore: string[];
	attrezzi?: boolean;
};

interface OpeningProps {
	days: OpeningHs[];
	className?: string;
}

export const OpeningHsTable = ({ days, className }: OpeningProps) => {
	const makeRows = (oh: OpeningHs[]) => {
		let rows = 0;

		// Find number of rows
		oh.forEach((el) => {
			if (el.ore.length >= rows) rows = el.ore.length;
		});

		let output = new Array(rows);

		// Construct the desired data shape
		for (let n = 0; n < rows; n++) {
			output[n] = oh.map((hour) => {
				return { content: hour.ore[n] };
			});
		}

		return output;
	};

	return (
		<Table
			headers={days.map((day) => `${day.label}${day.attrezzi ? "*" : ""}`)}
			rows={makeRows(days)}
			className={className}
		/>
	);
};
