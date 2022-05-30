import S from "@sanity/desk-tool/structure-builder";

import { NewspaperClipping } from "phosphor-react";

import { simpleImage } from "../objects";

const docType = "headerSection";
const docTitle = "Intestazione";

const headerSection = {
	name: docType,
	title: docTitle,
	type: "document",
	icon: NewspaperClipping,
	fields: [
		{
			name: "title",
			title: "Titolo",
			type: "string",
			description:
				"Titolo della sezione. è il titolo più importante della pagina.",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "content",
			title: "Contenuto",
			type: "simplePortableText",
			description: "Breve paragrafo con del testo descrittivo della pagina.",
			validation: (Rule) => Rule.required(),
		},
		simpleImage,
	],
};
export default headerSection;

export const headerSectionSB = () =>
	S.listItem()
		.title(docTitle)
		.icon(NewspaperClipping)
		.child(S.documentTypeList(docType).schemaType(docType).showIcons(true));
