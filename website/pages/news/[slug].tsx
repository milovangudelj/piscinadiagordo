import Head from "next/head";
import { useRouter } from "next/router";

// Pages
import ErrorPage from "../404";

// Components
import {
	Container,
	Layout,
	RecentNews,
	PostBody,
	PostHeader,
	SectionSeparator,
} from "../../components";

// Lib
import { postQuery, postSlugsQuery } from "../../lib/queries";
import { urlForImage } from "../../lib/sanity";
import {
	getClient,
	overlayDrafts,
	sanityClient,
} from "../../lib/sanity.server";

// Types
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
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Layout>
			<Container>
				{router.isFallback ? (
					<span className="my-60 flex justify-center text-base">
						In caricamento…
					</span>
				) : (
					<>
						<article className="mb-12">
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
								excerpt={data.post.excerpt}
								coverImage={data.post.coverImage}
								date={data.post.publishedAt}
							/>
							<PostBody content={data.post.body} />
						</article>
						<SectionSeparator className="py-6" />
						{data.morePosts.length > 0 && (
							<RecentNews
								title="Altri articoli"
								posts={data.morePosts}
							/>
						)}
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Post;
