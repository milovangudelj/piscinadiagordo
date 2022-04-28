import { Avatar, CoverImage, PostTitle, PostDate } from "../";

export const PostHeader = ({
	title,
	coverImage,
	date,
	author,
}: {
	title: any;
	coverImage: any;
	date: string;
	author: any;
}) => {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="hidden md:mb-12 md:block">
				<Avatar name={author.name} picture={author.image} />
			</div>
			<div className="mb-8 sm:mx-0 md:mb-16">
				<CoverImage title={title} image={coverImage} />
			</div>
			<div className="mx-auto max-w-2xl">
				<div className="mb-6 block md:hidden">
					<Avatar name={author.name} picture={author.image} />
				</div>
				<div className="mb-6 text-lg">
					<PostDate date={date} />
				</div>
			</div>
		</>
	);
};
