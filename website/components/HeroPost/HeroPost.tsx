import { Avatar, Date, CoverImage } from "../";
import Link from "next/link";

export const HeroPost = ({
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
		<section>
			<div className="mb-8 md:mb-16">
				<CoverImage slug={slug} title={title} image={coverImage} />
			</div>
			<div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
				<div>
					<h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
						<Link href={`/posts/${slug}`}>
							<a className="hover:underline">{title}</a>
						</Link>
					</h3>
					<div className="mb-4 text-lg md:mb-0">
						<Date dateString="2022-04-22 17:27" />
					</div>
				</div>
				<div>
					<p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
					<Avatar name={author.name} picture={author.image} />
				</div>
			</div>
		</section>
	);
};
