import { parseISO, format } from "date-fns";

export const PostDate = ({ date }: { date: string }) => {
	const dateVal = parseISO(date);

	return (
		<time
			dateTime={date}
			className="mt-2 mb-4 inline-block text-caption text-dark-me"
		>
			{format(dateVal, "d LLL, yyyy")}
		</time>
	);
};
