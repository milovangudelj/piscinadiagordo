import classNames from "classnames";
import { ReactNode } from "react";

export const Th = ({
	className,
	colSpan = 1,
	children,
}: {
	className?: string;
	colSpan?: number;
	children?: ReactNode;
}) => {
	return (
		<th
			colSpan={colSpan}
			className={classNames(
				"border-r border-primary-400 py-2 px-4 font-montserrat text-subtitle font-medium last-of-type:border-0",
				className
			)}
		>
			{children}
		</th>
	);
};
