import S from "@sanity/desk-tool/structure-builder";

import { Newspaper } from "phosphor-react";

const newsSection = {
	name: "newsSection",
	title: "News recenti",
	type: "document",
	icon: Newspaper,
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
	.title("News recenti")
	.icon(Newspaper)
	.child(S.document().schemaType("newsSection").documentId("newsSection"));
