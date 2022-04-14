export default {
	name: "corso",
	title: "Corso",
	type: "document",
	fields: [
		{
			name: "sigla",
			title: "Sigla",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "sigla",
				maxLength: 96,
			},
		},
		{
			name: "title",
			title: "Titolo",
			type: "string",
		},
		{
			name: "description",
			title: "Descrizione",
			type: "blockContent",
		},
		{
			name: "meta",
			title: "Meta",
			type: "string",
		},
		{
			name: "cover",
			title: "Copertina",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "order",
			title: "Ordine",
			type: "number",
		},
		{
			name: "frequenza",
			title: "Frequenza",
			type: "array",
			of: [{ type: "reference", to: { type: "frequenza" } }],
		},
	],
};
