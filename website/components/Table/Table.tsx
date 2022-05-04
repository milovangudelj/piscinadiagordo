// Components
import { Th, Td } from "./";

// Types
import { RequireOnlyOne } from "../../lib/types";
import classNames from "classnames";
import { ReactNode } from "react";

type TableColumn = {
	header: string;
	span?: number;
	className?: string;
};

type TableCell = {
	content: ReactNode;
	span?: number;
	className?: string;
};

type TableRow = {
	cells: TableCell[];
};

interface TableProps {
	headers?: string[];
	columns?: TableColumn[];
	rows: TableCell[][];
	className?: string;
}

export const Table = ({
	headers,
	columns,
	rows,
	className,
}: RequireOnlyOne<TableProps, "headers" | "columns">) => {
	return (
		<table
			className={classNames(
				"overflow-hidden rounded-lg text-left shadow-md",
				className
			)}
		>
			<thead className="bg-primary-500 text-primary-50">
				<tr className="text-subtitle">
					{headers
						? headers.map((header, idx) => (
								<Th key={`${header}_${idx}`}>{header}</Th>
						  ))
						: columns.map((column, idx) => (
								<Th
									key={`${column.header}_${idx}`}
									colSpan={column.span}
									className={column.className}
								>
									{column.header}
								</Th>
						  ))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, idx) => (
					<tr
						key={`${row.length}_${idx}`}
						className={classNames({ "bg-primary-50": idx % 2 !== 0 })}
					>
						{row.map((cell, cellIdx) => (
							<Td
								key={`${cell.content}_${cellIdx}`}
								className={cell.className}
							>
								{cell.content}
							</Td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};
