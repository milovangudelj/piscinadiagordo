import { Rows } from "phosphor-react";

const cardSection = {
	name: "cardSection",
	title: "Gruppo card",
	icon: Rows,
	type: "document",
	fields: [
		{
			name: "title",
			title: "Nome del gruppo",
			type: "string",
			description: "Solo per uso interno",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "cards",
			title: "Elementi",
			description: "Una lista di card da mostrare",
			type: "array",
			of: [{ type: "card" }],
		},
	],
};
export default cardSection;
