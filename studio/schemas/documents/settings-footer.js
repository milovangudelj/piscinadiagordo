export default {
	title: "Piè di pagina",
	name: "footerSettings",
	type: "document",
	fields: [
		{
			name: "footerItems",
			title: "Collegamenti",
			description:
				"La lista dei collegamenti che appaiono nel piè di pagina",
			type: "array",
			of: [{ type: "navPage" }, { type: "navLink" }],
		},
	],
	preview: {
		prepare() {
			return {
				title: "Piè di pagina",
			};
		},
	},
};
