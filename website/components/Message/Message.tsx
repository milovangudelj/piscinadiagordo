import classNames from "classnames";
import { ReactNode } from "react";

type MessageType = {
	warning: string;
	error: string;
	info: string;
	success: string;
};

type Messages<Type> = {
	[Property in keyof Type]: string;
};

const msgType: Messages<MessageType> = {
	warning: "Warning",
	error: "Error",
	info: "Info",
	success: "Success",
};

type MessageProps = {
	type: keyof MessageType;
	title?: string;
	children: string;
};

export const Message = ({ type, title, children }: MessageProps) => {
	return (
		<div
			className={classNames(
				`space-y-2 border-l-2 py-2 px-4`,
				{ "border-secondary-500 bg-secondary-50": type === "warning" },
				{ "border-error-500 bg-error-50": type === "error" },
				{ "border-primary-500 bg-primary-50": type === "info" },
				{ "border-success-500 bg-success-50": type === "success" }
			)}
		>
			<span
				className={classNames(
					"font-montserrat text-subtitle font-medium",
					{ "text-secondary-900": type === "warning" },
					{ "text-error-900": type === "error" },
					{ "text-primary-900": type === "info" },
					{ "text-success-900": type === "success" }
				)}
			>
				{title ?? msgType[type]}
			</span>
			<p>{children}</p>
		</div>
	);
};
