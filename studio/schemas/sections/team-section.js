import S from "@sanity/desk-tool/structure-builder";

import { Users } from "phosphor-react";

const docType = "teamSection";
const docTitle = "Team";
const docIcon = Users;

const teamSection = {
	name: docType,
	title: docTitle,
	type: "document",
	icon: docIcon,
	fields: [
		{
			name: "title",
			title: "Titolo",
			type: "string",
			description: "Titolo da mostrare sopra l'elenco dei membri del team.",
			validation: (Rule) => Rule.required(),
			initialValue: "Il team",
		},
	],
};
export default teamSection;

export const teamSectionSB = S.listItem()
	.title(docTitle)
	.icon(docIcon)
	.child(S.document().schemaType(docType).documentId(docType));
