import cn from "classnames";

interface PaginatorButtonProps {
	content?: number;
	disabled?: boolean;
	selected?: boolean;
	callback?: (pageNum: number) => Promise<void>;
}

type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
	T,
	Exclude<keyof T, Keys>
> &
	{
		[K in Keys]-?: Required<Pick<T, K>> &
			Partial<Record<Exclude<Keys, K>, undefined>>;
	}[Keys];

export const PaginatorButton = ({
	content = 1,
	disabled = false,
	selected = false,
	callback = async (pageNum: number) => {},
}: RequireOnlyOne<PaginatorButtonProps, "content" | "disabled">) => {
	const handleClick = async () => {
		if (!selected) await callback(content - 1);
	};

	return (
		<button
			className={cn(
				`flex h-10 w-10 items-center justify-center rounded-lg text-button font-bold`,
				{ clickable: !disabled },
				{ unclickable: disabled },
				{ selected: selected },
				{ unselected: !selected }
			)}
			onClick={handleClick}
		>
			{disabled ? "..." : content}
		</button>
	);
};
