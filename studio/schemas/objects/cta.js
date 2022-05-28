export const cta = {
	name: "cta",
	title: "Azione",
	type: "object",
	description: "Un pulsante che rimanda ad un'altra pagina del sito",
	fields: [
		{
			name: "label",
			title: "Testo",
			type: "string",
			description: "Il testo del pulsante",
			initialValue: "Nuota con noi",
		},
		{
			name: "link",
			title: "Link",
			type: "reference",
			to: [{ type: "page" }, { type: "homePage" }],
			description:
				'Un collegamento a un\'altra pagina del sito. (ad es. "Attività")',
			validation: (Rule) => Rule.required(),
		},
	],
};
