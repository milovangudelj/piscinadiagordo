import { CirclesThree } from "phosphor-react";

export default {
	name: "category",
	title: "Categorie",
	type: "document",
	icon: CirclesThree,
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
