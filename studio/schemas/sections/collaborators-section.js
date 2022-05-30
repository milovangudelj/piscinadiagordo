import S from "@sanity/desk-tool/structure-builder";

import { UsersFour } from "phosphor-react";

const docType = "collaboratorsSection";
const docTitle = "Collaboratori";
const docIcon = UsersFour;

const collaboratorsSection = {
	name: docType,
	title: docTitle,
	type: "document",
	icon: docIcon,
	fields: [
		{
			name: "title",
			title: "Titolo",
			type: "string",
			description: "Titolo da mostrare sopra l'elenco dei collaboratori.",
			validation: (Rule) => Rule.required(),
			initialValue: "I nostri collaboratori",
		},
	],
};
export default collaboratorsSection;

export const collaboratorsSectionSB = S.listItem()
	.title(docTitle)
	.icon(docIcon)
	.child(S.document().schemaType(docType).documentId(docType));
