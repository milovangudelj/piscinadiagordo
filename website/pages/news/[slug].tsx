// Components
import Head from "next/head";
import { useRouter } from "next/router";
import {
	Container,
	Layout,
	MoreStories,
	PostBody,
	PostHeader,
	PostTitle,
	SectionSeparator,
} from "../../components";
import { CMS_NAME } from "../../lib/constants";

// Lib
import { postQuery, postSlugsQuery } from "../../lib/queries";
import { urlForImage } from "../../lib/sanity";
import {
	getClient,
	overlayDrafts,
	sanityClient,
} from "../../lib/sanity.server";
import { Post } from "../../lib/types";

type PostPageData = {
	post: Post;
	morePosts: any[];
};

export const getStaticProps = async ({ params }: { params: any }) => {
	const { post, morePosts } = await getClient().fetch(postQuery, {
		slug: params.slug,
	});

	const data: PostPageData = {
		post,
		morePosts: overlayDrafts(morePosts),
	};

	return {
		props: {
			data,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = await sanityClient.fetch(postSlugsQuery);

	return {
		paths: paths.map((slug: string) => ({ params: { slug } })),
		fallback: true,
	};
};

const Post = ({ data }: { data: PostPageData }) => {
	const router = useRouter();

	if (!router.isFallback && !data?.post?.slug) {
		return (
			<Layout>
				<Container>Not found</Container>
			</Layout>
		);
	}

	return (
		<Layout>
			<Container>
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article>
							<Head>
								<title>{data.post.title} | Piscina di Agordo</title>
								{data.post.coverImage && (
									<meta
										key="ogImage"
										property="og:image"
										content={urlForImage(data.post.coverImage)
											.width(1200)
											.height(627)
											.fit("crop")
											.url()}
									/>
								)}
							</Head>
							<PostHeader
								title={data.post.title}
								coverImage={data.post.coverImage}
								date={data.post.publishedAt}
							/>
							<PostBody content={data.post.body} />
						</article>
						<SectionSeparator />
						{data.morePosts.length > 0 && (
							<MoreStories posts={data.morePosts} />
						)}
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Post;
