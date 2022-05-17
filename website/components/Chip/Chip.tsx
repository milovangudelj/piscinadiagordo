import classNames from "classnames";
import {
	MouseEventHandler,
	ReactNode,
	useCallback,
	useEffect,
	useState,
} from "react";

type ChipColor = {
	primary: string;
	secondary: string;
	success: string;
	error: string;
};

type ChipSize = {
	sm: string;
	md: string;
	lg: string;
};

type ChipVariant = {
	filled: string;
	outlined: string;
	borderless: string;
};

const classes = {
	base: (clickable: boolean) =>
		classNames(
			"inline-block h-min rounded-full font-medium transition py-0",
			{ "cursor-pointer": clickable },
			{ "cursor-default": !clickable }
		),
	variant: {
		filled: "text-light-he",
		outlined: "border bg-transparent",
		borderless: "bg-transparent",
	},
	colors: (clickable: boolean) => ({
		filled: {
			primary: classNames("bg-primary-500", {
				"hover:bg-primary-400 active:bg-primary-600": clickable,
			}),
			secondary: classNames("bg-secondary-500", {
				"hover:bg-secondary-400 active:bg-secondary-600": clickable,
			}),
			success: classNames("bg-success-500", {
				"hover:bg-success-400 active:bg-success-600": clickable,
			}),
			error: classNames("bg-error-500", {
				"hover:bg-error-400 active:bg-error-600": clickable,
			}),
			disabled: classNames("bg-gray-500", {
				"hover:bg-gray-400 active:bg-gray-600": clickable,
			}),
		},
		outlined: {
			primary: classNames("border-primary-500 text-primary-500", {
				"hover:bg-primary-500/5 active:bg-primary-500/10": clickable,
			}),
			secondary: classNames("border-secondary-500 text-secondary-500", {
				"hover:bg-secondary-500/5 active:bg-secondary-500/10": clickable,
			}),
			success: classNames("border-success-500 text-success-500", {
				"hover:bg-success-500/5 active:bg-success-500/10": clickable,
			}),
			error: classNames("border-error-500 text-error-500", {
				"hover:bg-error-500/5 active:bg-error-500/10": clickable,
			}),
			disabled: classNames("border-gray-500 text-gray-500", {
				"hover:bg-gray-500/5 active:bg-gray-500/10": clickable,
			}),
		},
		borderless: {
			primary: classNames("text-primary-500", {
				"hover:bg-primary-500/5 active:bg-primary-500/10": clickable,
			}),
			secondary: classNames("text-secondary-500", {
				"hover:bg-secondary-500/5 active:bg-secondary-500/10": clickable,
			}),
			success: classNames("text-success-500", {
				"hover:bg-success-500/5 active:bg-success-500/10": clickable,
			}),
			error: classNames("text-error-500", {
				"hover:bg-error-500/5 active:bg-error-500/10": clickable,
			}),
			disabled: classNames("text-gray-500", {
				"hover:bg-gray-500/5 active:bg-gray-500/10": clickable,
			}),
		},
	}),
	sizes: {
		sm: {
			padding: "px-1",
			text: "text-button-xs",
		},
		md: {
			padding: "px-2",
			text: "text-button-sm",
		},
		lg: {
			padding: "px-3",
			text: "text-button",
		},
	},
};

interface ChipProps {
	color?: keyof ChipColor;
	size?: keyof ChipSize;
	variant?: keyof ChipVariant;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLSpanElement>;
	children: ReactNode;
}

export const Chip = ({
	color = "primary",
	size = "md",
	variant = "filled",
	disabled = false,
	onClick,
	children,
}: ChipProps) => {
	const makeStyles = useCallback((): string => {
		return classNames(
			classes.base(onClick !== undefined && !disabled),
			classes.variant[variant],
			classes.colors(onClick !== undefined && !disabled)[variant][
				!disabled ? color : "disabled"
			],
			classes.sizes[size].padding,
			classes.sizes[size].text
		);
	}, [color, size, variant, disabled, onClick]);

	const [styles, setStyles] = useState(makeStyles);

	useEffect(() => {
		setStyles(makeStyles);
	}, [makeStyles]);

	return (
		<span onClick={disabled ? undefined : onClick} className={styles}>
			{children}
		</span>
	);
};
