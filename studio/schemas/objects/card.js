import { Cards } from "phosphor-react";

import { cta, simpleImage } from "./";

export const card = {
	name: "card",
	title: "Card",
	type: "document",
	icon: Cards,
	fields: [
		{
			name: "title",
			title: "Titolo",
			type: "string",
			description: "Titolo dlla card.",
			validation: (Rule) => Rule.required(),
			initialValue: "Card",
		},
		{
			name: "content",
			title: "Contenuto",
			type: "simplePortableText",
			description: "Il contenuto della card",
			validation: (Rule) => Rule.required(),
		},
		cta,
		simpleImage,
	],
};
