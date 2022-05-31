import S from "@sanity/desk-tool/structure-builder";

import { Money } from "phosphor-react";

export const sponsorInfo = {
	type: "sponsorSection",
	title: "Sponsor / partner",
	icon: Money,
};

const sponsorSection = {
	name: sponsorInfo.type,
	title: sponsorInfo.title,
	type: "document",
	icon: sponsorInfo.icon,
	fields: [
		{
			name: "title",
			title: "Titolo",
			type: "string",
			description:
				"Titolo da mostrare sopra l'elenco degli sponsor/partner'.",
			validation: (Rule) => Rule.required(),
			initialValue: "I nostri partner",
		},
	],
};
export default sponsorSection;

export const sponsorSectionSB = S.listItem()
	.title(sponsorInfo.title)
	.icon(sponsorInfo.icon)
	.child(
		S.document().schemaType(sponsorInfo.type).documentId(sponsorInfo.type)
	);
