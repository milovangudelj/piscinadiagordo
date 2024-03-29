export default {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Titolo",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: [{ type: "author" }],
		},
		{
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Testo alternativo",
					options: {
						isHighlighted: true,
					},
				},
			],
		},
		{
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category" } }],
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
		{
			name: "excerpt",
			title: "Excerpt",
			type: "string",
		},
	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "coverImage",
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
