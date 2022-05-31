import { Rows } from "phosphor-react";

export const cardInfo = {
	type: "cardSection",
	title: "Gruppo card",
	icon: Rows,
};

const cardSection = {
	name: cardInfo.type,
	title: cardInfo.title,
	icon: cardInfo.icon,
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
