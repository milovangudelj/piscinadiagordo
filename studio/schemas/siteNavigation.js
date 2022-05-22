export default {
	name: "siteNavigation",
	title: "Navigazione del Sito",
	type: "document",
	__experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
	fields: [
		{
			name: "title",
			title: "Titolo",
			type: "string",
		},
		{
			name: "description",
			title: "Descrizione",
			type: "text",
		},
	],
};
