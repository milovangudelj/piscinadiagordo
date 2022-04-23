import { Avatar, Date, CoverImage } from "../";
import Link from "next/link";

export const PostPreview = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}: {
	title: string;
	coverImage: any;
	date: string;
	excerpt: string;
	author: any;
	slug: string;
}) => {
	return (
		<div>
			<div className="mb-5">
				<CoverImage slug={slug} title={title} image={coverImage} />
			</div>
			<h3 className="mb-3 text-3xl leading-snug">
				<Link href={`/post/${slug}`} passHref>
					<a className="hover:underline">{title}</a>
				</Link>
			</h3>
			<div className="mb-4 text-lg">
				<Date dateString="2022-04-22 17:27" />
			</div>
			<p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
			<Avatar name={author.name} picture={author.image} />
		</div>
	);
};
