import S from "@sanity/desk-tool/structure-builder";

import { Newspaper } from "phosphor-react";

export const newsInfo = {
	type: "newsSection",
	title: "News recenti",
	icon: Newspaper,
};

const newsSection = {
	name: newsInfo.type,
	title: newsInfo.title,
	type: "document",
	icon: newsInfo.icon,
	fields: [
		{
			name: "title",
			title: "Titolo",
			type: "string",
			description: "Titolo da mostrare sopra le card delle notizie.",
			validation: (Rule) => Rule.required(),
			initialValue: "News",
		},
		{
			name: "count",
			title: "Numero di elementi",
			type: "number",
			description:
				"Il numero massimo di notizie da mostrare nell'elenco. (ideale sarebbe 3)",
			validation: (Rule) => Rule.required(),
			initialValue: 3,
		},
	],
};
export default newsSection;

export const newsSectionSB = S.listItem()
	.title(newsInfo.title)
	.icon(newsInfo.icon)
	.child(S.document().schemaType(newsInfo.type).documentId(newsInfo.type));
