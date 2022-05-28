export const simpleImage = {
	name: "simpleImage",
	title: "Immagine",
	type: "image",
	options: {
		hotspot: true,
	},
	fields: [
		{
			title: "Testo alternativo",
			name: "alt",
			type: "string",
			description: "Importante per la SEO e per l'accessibilità.",
			options: {
				isHighlighted: true,
			},
		},
	],
};
