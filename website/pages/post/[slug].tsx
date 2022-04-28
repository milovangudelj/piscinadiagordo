import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
	Container,
	PostBody,
	MoreStories,
	Header,
	PostHeader,
	SectionSeparator,
	Layout,
	PostTitle,
} from "../../components";

import { CMS_NAME } from "../../lib/constants";
import { postQuery, postSlugsQuery } from "../../lib/queries";
import { urlForImage, usePreviewSubscription } from "../../lib/sanity";
import {
	sanityClient,
	getClient,
	overlayDrafts,
} from "../../lib/sanity.server";

export default function Post({
	data = {},
	preview,
}: {
	data: any;
	preview: boolean;
}) {
	const router = useRouter();

	const slug = data?.post?.slug;
	const {
		data: { post, morePosts },
	} = usePreviewSubscription(postQuery, {
		params: { slug },
		initialData: data,
		enabled: preview && slug,
	});

	if (!router.isFallback && !slug) {
		return <ErrorPage statusCode={404} />;
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
								<title>
									{post.title} | Next.js Blog Example with {CMS_NAME}
								</title>
								{post.coverImage && (
									<meta
										key="ogImage"
										property="og:image"
										content={urlForImage(post.coverImage)
											.width(1200)
											.height(627)
											.fit("crop")
											.url()}
									/>
								)}
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.publishedAt}
							/>
							{/* <PostBody content={post.content} /> */}
						</article>
						<SectionSeparator />
						{morePosts.length > 0 && <MoreStories posts={morePosts} />}
					</>
				)}
			</Container>
		</Layout>
	);
}

export async function getStaticProps({
	params,
	preview = false,
}: {
	params: any;
	preview: boolean;
}) {
	const { post, morePosts } = await getClient(preview).fetch(postQuery, {
		slug: params.slug,
	});

	return {
		props: {
			preview,
			data: {
				post,
				morePosts: overlayDrafts(morePosts),
			},
		},
	};
}

export async function getStaticPaths() {
	const paths = await sanityClient.fetch(postSlugsQuery);

	return {
		paths: paths.map((slug: string) => ({ params: { slug } })),
		fallback: true,
	};
}
