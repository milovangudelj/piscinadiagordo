import classNames from "classnames";
import { ReactNode } from "react";

export const Td = ({
	className,
	colSpan = 1,
	children,
}: {
	className?: string;
	colSpan?: number;
	children?: ReactNode;
}) => {
	return (
		<td
			colSpan={colSpan}
			className={classNames(
				"border-r border-primary-100 py-2 px-4 text-base last-of-type:border-0",
				className
			)}
		>
			{children}
		</td>
	);
};
