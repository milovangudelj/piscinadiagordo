// Components
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useEffect, useState } from "react";
import {
	Container,
	Layout,
	Paginator,
	PostPreview,
	SectionSeparator,
} from "../../components";
import { PaginationProvider } from "../../context/pagination";

// Lib
import { postCountQuery, postsQueryPaginated } from "../../lib/queries";
import { getClient } from "../../lib/sanity.server";

// Types
import { Post } from "../../lib/types";

export const getStaticProps: GetStaticProps = async () => {
	const { posts } = await getClient().fetch(postsQueryPaginated, {
		startAt: 0,
		take: 10,
	});
	const { count } = await getClient().fetch(postCountQuery);

	return {
		props: {
			posts: posts ?? [],
			postCount: count ?? 0,
		},
	};
};

const News = ({
	posts: news,
	postCount,
}: {
	posts: Post[];
	postCount: number;
}) => {
	const [posts, setPosts] = useState<Post[]>(news);
	const [pageSize, setPageSize] = useState<number>(1);
	const [currentPage, setCurrentPage] = useState<number>(0);

	const refetch = async (
		startAt: number = 0,
		take: number = pageSize
	): Promise<Post[]> => {
		const data = await getClient().fetch(postsQueryPaginated, {
			startAt,
			take,
		});

		return data.posts || [];
	};

	const handleRefetch = async (page: number = 0) => {
		setCurrentPage(page);
		setPosts(await refetch(page * pageSize, pageSize));
	};

	useEffect(() => {
		handleRefetch(currentPage);
	}, [pageSize]);

	return (
		<PaginationProvider pageSize={pageSize} itemsCount={postCount}>
			<Layout>
				<Container>
					<header className="mb-6 flex items-center justify-between py-8">
						<h1>News</h1>
						<Paginator onPageChange={handleRefetch} />
					</header>
				</Container>
				<SectionSeparator />
				<Container className="my-6">
					<ol className="mb-12">
						{posts.map((post, idx) => (
							<>
								<li key={post._id}>
									<PostPreview post={post} />
								</li>
								{idx !== posts.length - 1 && (
									<SectionSeparator
										key={`separator_${post._id}`}
										className="py-8"
									/>
								)}
							</>
						))}
					</ol>
					<div className="flex justify-center">
						<Paginator onPageChange={handleRefetch} />
					</div>
				</Container>
			</Layout>
		</PaginationProvider>
	);
};

export default News;
