import { ArrowSquareOut } from "phosphor-react";

export default {
	title: "Link",
	name: "navLink",
	type: "object",
	icon: ArrowSquareOut,
	fields: [
		{
			title: "Titolo",
			name: "title",
			type: "string",
			description: "Testo del link",
		},
		{
			title: "URL",
			name: "url",
			type: "url",
			description: "Inserisci un URL esterno al sito",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
				}),
		},
	],
	preview: {
		select: {
			title: "title",
			url: "url",
		},
		prepare({ title, url }) {
			return {
				title: title ?? url,
				subtitle: title && url,
			};
		},
	},
};
