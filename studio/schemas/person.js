export default {
	name: "person",
	title: "Persona",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Nome",
			type: "string",
		},
		{
			name: "surname",
			title: "Cognome",
			type: "string",
		},
		{
			name: "image",
			title: "Immagine",
			type: "image",
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
			name: "role",
			title: "Ruolo",
			type: "array",
			of: [{ type: "reference", to: { type: "role" } }],
		},
		{
			name: "stakeholder",
			title: "Direttivo",
			type: "boolean",
		},
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
};
