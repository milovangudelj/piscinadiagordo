import { Browser, DiamondsFour, Newspaper } from "phosphor-react";

import { sectionsInfo } from "../sections";
const {
	cardInfo,
	collaboratorsInfo,
	headerInfo,
	heroInfo,
	newsInfo,
	sponsorInfo,
	teamInfo,
} = sectionsInfo;

export default {
	title: "Page",
	name: "page",
	type: "document",
	icon: Browser,
	groups: [
		{ title: "Contenuto", name: "content", default: true },
		{ title: "Impostazioni", name: "settings" },
	],
	fields: [
		{
			name: "title",
			title: "Titolo",
			type: "string",
			validation: (Rule) => Rule.required(),
			group: "settings",
		},
		{
			title: "URL Slug",
			name: "slug",
			type: "slug",
			description: "(necessario)",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
			group: "settings",
		},
		{
			title: "Contenuto della pagina",
			name: "modules",
			type: "array",
			of: [
				{
					title: heroInfo.title,
					name: heroInfo.type,
					type: "reference",
					to: [{ type: heroInfo.type }],
					icon: heroInfo.icon,
					disableNew: true,
				},
				{
					title: headerInfo.title,
					name: headerInfo.type,
					type: "reference",
					to: [{ type: headerInfo.type }],
					icon: headerInfo.icon,
				},
				{
					title: cardInfo.title,
					name: cardInfo.type,
					type: "reference",
					to: [{ type: cardInfo.type }],
					icon: cardInfo.icon,
				},
				{
					title: newsInfo.title,
					name: newsInfo.type,
					type: "reference",
					to: [{ type: newsInfo.type }],
					icon: newsInfo.icon,
					disableNew: true,
				},
				{
					title: sponsorInfo.title,
					name: sponsorInfo.type,
					type: "reference",
					to: [{ type: sponsorInfo.type }],
					icon: sponsorInfo.icon,
					disableNew: true,
				},
				{
					title: teamInfo.title,
					name: teamInfo.type,
					type: "reference",
					to: [{ type: teamInfo.type }],
					icon: teamInfo.icon,
					disableNew: true,
				},
				{
					title: collaboratorsInfo.title,
					name: collaboratorsInfo.type,
					type: "reference",
					to: [{ type: collaboratorsInfo.type }],
					icon: collaboratorsInfo.icon,
					disableNew: true,
				},
			],
			group: "content",
		},
		{
			title: "SEO / Condivisione",
			name: "seo",
			type: "seo",
			group: "settings",
		},
	],
	preview: {
		select: {
			title: "title",
			slug: "slug",
		},
		prepare({ title = "Untitled", slug = {} }) {
			const path = `/${slug.current}`;
			return {
				title,
				subtitle: slug.current ? path : "(slug mancante)",
			};
		},
	},
};
