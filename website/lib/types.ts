export type Person = {
	_id: string;
	name: string;
	surname: string;
	role: string;
	image: any;
};

export type Post = {
	_id: string;
	publishedAt: string;
	title: string;
	excerpt: string;
	body: any;
	coverImage: any;
	slug: string;
};