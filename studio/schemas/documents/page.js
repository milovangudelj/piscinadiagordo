import { Browser, DiamondsFour, Newspaper } from "phosphor-react";

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
				{ type: "grid" },
				{ type: "hero" },
				{ type: "marquee" },
				{ type: "dividerPhoto" },
				{
					title: "Sezione",
					type: "reference",
					icon: DiamondsFour,
					to: [
						{ type: "section" },
						{ type: "heroSection" },
						{ type: "newsSection" },
						{ type: "sponsorSection" },
						{ type: "cardSection" },
					],
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
