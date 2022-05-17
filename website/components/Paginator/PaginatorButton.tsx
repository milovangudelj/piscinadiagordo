import cn from "classnames";

// Types
import { RequireOnlyOne } from "../../lib/types";

interface PaginatorButtonProps {
	content?: number;
	disabled?: boolean;
	selected?: boolean;
	callback?: (pageNum: number) => Promise<void>;
}

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
				`flex h-10 w-10 items-center justify-center rounded-lg text-button-sm font-medium`,
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
