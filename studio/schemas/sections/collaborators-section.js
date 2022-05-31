import S from "@sanity/desk-tool/structure-builder";

import { UsersFour } from "phosphor-react";

export const collaboratorsInfo = {
	type: "collaboratorsSection",
	title: "Collaboratori",
	icon: UsersFour,
};

const collaboratorsSection = {
	name: collaboratorsInfo.type,
	title: collaboratorsInfo.title,
	type: "document",
	icon: collaboratorsInfo.icon,
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
	.title(collaboratorsInfo.title)
	.icon(collaboratorsInfo.icon)
	.child(
		S.document()
			.schemaType(collaboratorsInfo.type)
			.documentId(collaboratorsInfo.type)
	);
