export default {
	title: "Impostazioni Avviso",
	name: "noticeSettings",
	type: "document",
	fields: [
		{
			title: "Attiva barra dell'Avviso?",
			name: "enabled",
			type: "boolean",
		},
		{
			title: "Su quali pagine?",
			name: "display",
			type: "string",
			options: {
				list: [
					{ title: "Solo Home Page", value: "home" },
					{ title: "Tutte", value: "all" },
				],
			},
			description: "Scegli dove far apparire la barrra dell'Avviso",
			initialValue: "home",
			hidden: ({ parent }) => !parent.enabled,
			validation: (Rule) =>
				Rule.custom((field, context) => {
					return context.parent.enabled && field === undefined
						? "Devi scegliere la posizione se abiliti la barra."
						: true;
				}),
		},
		{
			title: "Testo",
			name: "text",
			type: "string",
			description: "Il testo da mostrare nell'Avviso",
			hidden: ({ parent }) => !parent.enabled,
		},
		{
			title: "Link",
			name: "link",
			type: "reference",
			to: [{ type: "page" }],
			description:
				"(facoltativo) Seleziona una pagina da collegare alla barra dell'Avviso",
			hidden: ({ parent }) => !parent.enabled,
		},
	],
	preview: {
		prepare() {
			return {
				title: "Impostazioni Avviso",
			};
		},
	},
};
