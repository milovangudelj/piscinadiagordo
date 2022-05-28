export default {
	title: "SEO / Condivisione",
	name: "seo",
	type: "object",
	options: {
		collapsible: true,
	},
	fields: [
		{
			title: "Titolo Meta",
			name: "metaTitle",
			type: "string",
			description: "Titolo usato per motori di ricerca e browser",
			validation: (Rule) =>
				Rule.max(50).warning(
					"Titoli più lunghi potrebbero essere tagliati dai motori di ricerca"
				),
		},
		{
			title: "Descrizione Meta",
			name: "metaDesc",
			type: "text",
			rows: 3,
			description: "Descrizione per i motori di ricerca",
			validation: (Rule) =>
				Rule.max(150).warning(
					"Descrizioni più lunghe potrebbero essere tagliate dai motori di ricerca"
				),
		},
		{
			title: "Titolo di Condivisione",
			name: "shareTitle",
			type: "string",
			description: "Titolo usato nelle card di condivisione sui social",
			validation: (Rule) =>
				Rule.max(50).warning(
					"Titoli più lunghi potrebbero essere tagliati dalle piattaforme social"
				),
		},
		{
			title: "Descrizione di Condivisione",
			name: "shareDesc",
			type: "text",
			rows: 3,
			description: "Descrizione usata nelle card di condivisione sui social",
			validation: (Rule) =>
				Rule.max(150).warning(
					"Descrizioni più lunghe potrebbero essere tagliate dalle piattaforme social"
				),
		},
		{
			title: "Immagine di Condivisione",
			name: "shareGraphic",
			type: "image",
			description: "Dimensioni consigliate: 1200x630 (PNG o JPG)",
		},
	],
};
