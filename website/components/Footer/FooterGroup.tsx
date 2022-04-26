import { ReactNode } from "react";

export const FooterGroup = ({
	list = "ul",
	title,
	children,
	width = "full",
}: {
	list?: "ul" | "ol";
	title: string;
	children: ReactNode;
	width?: "min" | "full";
}) => {
	const List = list;

	return (
		<div className={width === "full" ? "flex-1" : "flex-shrink"}>
			<h3 className="mb-6 text-h5">{title}</h3>
			<List className="space-y-6 text-base text-dark-me">{children}</List>
		</div>
	);
};
