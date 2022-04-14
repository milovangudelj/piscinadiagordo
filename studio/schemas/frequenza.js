export default {
	name: "frequenza",
	title: "Frequenza",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Nome",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
	],
};
