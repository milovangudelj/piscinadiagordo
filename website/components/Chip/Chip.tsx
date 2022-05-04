import classNames from "classnames";
import { ReactNode } from "react";

type ChipType = {
	warning: string;
	error: string;
	info: string;
	success: string;
};

export const Chip = ({
	type = "info",
	children,
}: {
	type?: keyof ChipType;
	children: ReactNode;
}) => {
	return (
		<span
			className={classNames(
				`inline-block rounded-full border px-2 py-0.5 text-base leading-none`,
				{
					"border-secondary-500 bg-secondary-50 text-secondary-500":
						type === "warning",
				},
				{ "border-error-500 bg-error-50 text-error-500": type === "error" },
				{
					"border-primary-500 bg-primary-50 text-primary-500":
						type === "info",
				},
				{
					"border-success-500 bg-success-50 text-success-500":
						type === "success",
				}
			)}
		>
			{children}
		</span>
	);
};
