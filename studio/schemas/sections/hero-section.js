import S from "@sanity/desk-tool/structure-builder";

import { NewspaperClipping } from "phosphor-react";
import { cta, simpleImage } from "../objects";

export const heroInfo = {
	type: "heroSection",
	title: "Hero",
	icon: NewspaperClipping,
};

const heroSection = {
	name: heroInfo.type,
	title: heroInfo.title,
	type: "document",
	icon: heroInfo.icon,
	fields: [
		{
			name: "title",
			title: "Titolo",
			type: "string",
			description:
				"Titolo della sezione visibile accanto all'immagine e sopra al paragrafo.",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "content",
			title: "Contenuto",
			type: "string",
			description:
				"Breve paragrafo con del testo descrittivo della pagina o del sito.",
			validation: (Rule) => Rule.required(),
		},
		cta,
		simpleImage,
	],
};
export default heroSection;

export const heroSectionSB = S.listItem()
	.title(heroInfo.title)
	.icon(heroInfo.icon)
	.child(S.document().schemaType(heroInfo.type).documentId(heroInfo.type));
