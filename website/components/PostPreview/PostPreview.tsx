import Link from "next/link";
import { LinkIcon } from "@heroicons/react/solid";

// Components
import { Avatar, PostDate, CoverImage, Button } from "../";

// Types
import { Post } from "../../lib/types";

export const PostPreview = ({ post }: { post: Post }) => {
	const { slug, coverImage, title, excerpt, publishedAt } = post;

	return (
		<div className="flex">
			<div>
				<h3 className="flex items-baseline text-h3 leading-snug">
					<Link href={`/news/${slug}`} passHref>
						<a>
							<span className="mr-2 inline-block" aria-hidden>
								<LinkIcon className="h-5 w-5 text-current" />
							</span>
							<span>{title}</span>
						</a>
					</Link>
				</h3>
				<PostDate date={publishedAt} />
				<p className="mb-6 text-lg leading-relaxed">{excerpt}</p>
				<Button as={Link} href={`/news/${slug}`} passHref>
					Leggi l&apos;articolo
				</Button>
				{/* <Avatar name={author.name} picture={author.image} /> */}
			</div>
			<div className="ml-12">
				<CoverImage slug={slug} title={title} image={coverImage} />
			</div>
		</div>
	);
};
