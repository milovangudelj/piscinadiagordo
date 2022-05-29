import S from "@sanity/desk-tool/structure-builder";

import { Rows } from "phosphor-react";

const docType = "cardSection";
const docTitle = "Gruppo card";

const cardSection = {
	name: docType,
	title: docTitle,
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

export const cardSectionSB = S.listItem()
	.title(docTitle)
	.icon(Rows)
	.child(S.documentTypeList(docType).showIcons(true));
