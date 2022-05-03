import { ReactNode } from "react";

export const Header = ({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) => {
	return (
		<>
			<h2>{title}</h2>
			<p className="mt-4 text-base">{children}</p>
		</>
	);
};
