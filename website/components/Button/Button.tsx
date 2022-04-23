import {
	ElementType,
	ComponentPropsWithoutRef,
	ReactNode,
	useState,
	useEffect,
} from "react";

import cn from "classnames";

type ButtonColor = "primary" | "secondary" | "success" | "error" | "gray";
type ButtonSize = "small" | "normal" | "large"; // Unused

interface ButtonProps<T extends ElementType> {
	as?: T;
	children?: ReactNode;
	href?: string;
	passHref?: boolean;
	loading?: boolean;
	color?: ButtonColor;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
}

const classes = {
	base: "btn",
	disabled: (disabled: boolean) =>
		disabled ? "opacity-50 cursor-not-allowed" : "",
	loading: (loading: boolean) => (loading ? "cursor-wait" : ""),
	iconSpacing: {
		start: "mr-2",
		end: "ml-2",
	},
	variant: {
		primary: "btn-primary",
		secondary: "btn-secondary",
		success: "btn-success",
		error: "btn-error",
		gray: "btn-gray",
	},
};

export const Button = <T extends ElementType = "button">({
	as,
	href,
	passHref,
	color = "primary",
	loading = false,
	startIcon,
	endIcon,
	disabled,
	className,
	...props
}: ButtonProps<T> &
	Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
	const Component = as || "button";
	const [style, setStyle] = useState<string>(
		cn(
			classes.base,
			classes.variant[color],
			classes.disabled(disabled),
			classes.loading(loading),
			{ className: className }
		)
	);

	useEffect(() => {
		setStyle(
			cn(
				classes.base,
				classes.variant[color],
				classes.disabled(disabled),
				classes.loading(loading),
				{ className: className }
			)
		);
	}, [color, disabled, loading, className]);

	const content = (
		<>
			{loading && (
				<svg
					className={`absolute h-5 w-5 motion-safe:animate-spin`}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			)}
			<span className={`${loading ? "invisible" : ""} flex items-center`}>
				{startIcon && (
					<span className={`${classes.iconSpacing.start}`}>
						{startIcon}
					</span>
				)}
				<span>{props.children}</span>
				{endIcon && (
					<span className={`${classes.iconSpacing.end}`}>{endIcon}</span>
				)}
			</span>
		</>
	);

	return passHref ? (
		<Component
			{...props}
			href={href}
			passHref={passHref}
			disabled={disabled || loading}
			className={style}
		>
			<a {...props} className={style}>
				{content}
			</a>
		</Component>
	) : (
		<Component
			{...props}
			href={href}
			disabled={disabled || loading}
			className={style}
		>
			{content}
		</Component>
	);
};
