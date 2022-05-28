import S from "@sanity/desk-tool/structure-builder";

import { Money } from "phosphor-react";

const docType = "sponsorSection";
const docTitle = "Sponsor / partner";

const sponsorSection = {
	name: docType,
	title: docTitle,
	type: "document",
	icon: Money,
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
	.title(docTitle)
	.icon(Money)
	.child(S.document().schemaType(docType).documentId(docType));
