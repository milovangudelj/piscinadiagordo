import S from "@sanity/desk-tool/structure-builder";

import { NewspaperClipping } from "phosphor-react";
import { cta, simpleImage } from "../objects";

const heroSection = {
	name: "heroSection",
	title: "Hero",
	type: "document",
	icon: NewspaperClipping,
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
	.title("Hero")
	.icon(NewspaperClipping)
	.child(S.document().schemaType("heroSection").documentId("heroSection"));
