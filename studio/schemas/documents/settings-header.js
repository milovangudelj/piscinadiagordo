export default {
	title: "Barra di navigazione",
	name: "headerSettings",
	type: "document",
	fields: [
		{
			name: "navItems",
			title: "Link della barra",
			description:
				"La lista dei collegamenti che appaiono nella barra di navigazione",
			type: "array",
			of: [
				{ type: "navPage" },
				{ type: "navLink" },
				{ type: "navDropdown" },
			],
		},
	],
	preview: {
		prepare() {
			return {
				title: "Barra di navigazione",
			};
		},
	},
};
