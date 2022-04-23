import cn from "classnames";

export const Container = ({
	children,
	className = "",
}: {
	children: any;
	className?: string;
}) => {
	return (
		<div className={cn("mx-auto w-full max-w-[1240px]", className)}>
			{children}
		</div>
	);
};
