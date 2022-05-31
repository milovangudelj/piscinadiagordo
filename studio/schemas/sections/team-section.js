import S from "@sanity/desk-tool/structure-builder";

import { Users } from "phosphor-react";

export const teamInfo = {
	type: "teamSection",
	title: "Team",
	icon: Users,
};

const teamSection = {
	name: teamInfo.type,
	title: teamInfo.title,
	type: "document",
	icon: teamInfo.icon,
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
	.title(teamInfo.title)
	.icon(teamInfo.icon)
	.child(S.document().schemaType(teamInfo.type).documentId(teamInfo.type));
