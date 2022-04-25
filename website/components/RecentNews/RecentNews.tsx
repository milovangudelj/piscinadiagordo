import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../lib/sanity";
import { Button } from "../Button";
import { Container } from "../Container";

export const RecentNews = ({ posts }: { posts: any[] }) => {
	return (
		<Container className="my-12">
			<h2>News</h2>
			<ol className="mt-12 flex gap-12">
				{posts.map((post) => (
					<li key={post._id}>
						<div className="relative h-[200px] w-[380px] overflow-hidden rounded-lg">
							<Image
								src={urlForImage(post.coverImage).quality(100).url()}
								layout="fill"
								objectFit="cover"
								alt={post.coverImage.alt}
							/>
						</div>
						<h3 className="mt-6 text-h4">{post.title}</h3>
						<span className="mt-2 mb-4 inline-block text-caption text-dark-me">
							{format(new Date(post.publishedAt), "d LLL, yyyy")}
						</span>
						<p className="mb-6 text-base">{post.excerpt}</p>
						<Button as={Link} href={`/news/${post.slug}`} passHref>
							Leggi tutto
						</Button>
					</li>
				))}
			</ol>
		</Container>
	);
};
