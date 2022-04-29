import Image from "next/image";
import Link from "next/link";

// Components
import { Button, Container, PostDate } from "..";

// Lib
import { urlForImage } from "../../lib/sanity";

// Types
import { Post } from "../../lib/types";

export const RecentNews = ({
	title,
	posts,
}: {
	title: string;
	posts: Post[];
}) => {
	return (
		<Container className="my-12">
			<h2 className="text-h2">{title}</h2>
			<ol className="mt-12 flex gap-12">
				{posts.map((post) => (
					<li key={post._id} className="flex-1">
						<div className="relative aspect-video overflow-hidden rounded-lg">
							<Image
								src={urlForImage(post.coverImage).quality(100).url()}
								layout="fill"
								objectFit="cover"
								alt={post.coverImage.alt}
							/>
						</div>
						<h3 className="mt-6 text-h4">{post.title}</h3>
						<PostDate date={post.publishedAt} />
						<p className="mb-6 text-base">{post.excerpt}</p>
						<Button as={Link} href={`/news/${post.slug}`} passHref>
							Leggi l&apos;articolo
						</Button>
					</li>
				))}
			</ol>
		</Container>
	);
};
