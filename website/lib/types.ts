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

export type Frequenza = {
	_id: string;
	name: string;
}

export type Corso = {
	_id: string;
	title: string;
	description: any;
	cover:any;
	frequenza: Frequenza[];
}