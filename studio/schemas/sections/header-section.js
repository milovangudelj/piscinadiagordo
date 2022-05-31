import S from "@sanity/desk-tool/structure-builder";

import { NewspaperClipping } from "phosphor-react";

import { simpleImage } from "../objects";

export const headerInfo = {
	type: "headerSection",
	title: "Intestazione",
	icon: NewspaperClipping,
};

const headerSection = {
	name: headerInfo.type,
	title: headerInfo.title,
	type: "document",
	icon: headerInfo.icon,
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
		.title(headerInfo.title)
		.icon(headerInfo.icon)
		.child(
			S.documentTypeList(headerInfo.type)
				.schemaType(headerInfo.type)
				.showIcons(true)
		);
