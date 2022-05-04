export type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
	T,
	Exclude<keyof T, Keys>
> &
	{
		[K in Keys]-?: Required<Pick<T, K>> &
			Partial<Record<Exclude<Keys, K>, undefined>>;
	}[Keys];

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
};

export type Corso = {
	_id: string;
	title: string;
	description: any;
	cover: any;
	frequenza: Frequenza[];
};
