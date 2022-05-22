import React from "react";
import { decodeAssetUrl } from "../../lib/helpers";

export default {
	title: "Default SEO / Condivisione",
	name: "seoSettings",
	type: "document",
	groups: [
		{ title: "SEO Globale", name: "seo", default: true },
		{ title: "Social", name: "social" },
		{ title: "Icone Browser", name: "icons" },
	],
	fields: [
		{
			name: "seoNote",
			type: "note",
			options: {
				headline: "Template Tag",
				message: (
					<>
						<span>
							Puoi usare <code>{`{{ page_title }}`}</code> e{" "}
							<code>{`{{ site_title }}`}</code> per mostrare
							dinamicamente il titolo della pagina e del sito nei campi
							"Titolo Meta" e "Titolo di Condivisione"
						</span>
					</>
				),
				tone: "primary",
			},
			group: ["seo", "social"],
		},
		{
			title: "Titolo Meta",
			name: "metaTitle",
			type: "string",
			description: "Titolo usato per motori di ricerca e browser",
			validation: (Rule) =>
				Rule.max(50).warning(
					"Titoli più lunghi potrebbero essere tagliati dai motori di ricerca"
				),
			group: "seo",
		},
		{
			title: "Descrizione Meta",
			name: "metaDesc",
			type: "text",
			rows: 3,
			description: "Descrizione per i motori di ricerca",
			validation: (Rule) =>
				Rule.max(150).warning(
					"Descrizioni più lunghe potrebbero essere tagliate dai motori di ricerca"
				),
			group: "seo",
		},
		{
			title: "Titolo di Condivisione",
			name: "shareTitle",
			type: "string",
			description: "Titolo usato nelle card di condivisione sui social",
			validation: (Rule) =>
				Rule.max(50).warning(
					"Titoli più lunghi potrebbero essere tagliati dalle piattaforme social"
				),
			group: "social",
		},
		{
			title: "Descrizione di Condivisione",
			name: "shareDesc",
			type: "text",
			rows: 3,
			description: "Descrizione usata nelle card di condivisione sui social",
			validation: (Rule) =>
				Rule.max(150).warning(
					"Descrizioni più lunghe potrebbero essere tagliate dalle piattaforme social"
				),
			group: "social",
		},
		{
			title: "Immagine di Condivisione",
			name: "shareGraphic",
			type: "image",
			description: "Dimensioni consigliate: 1200x630 (PNG o JPG)",
			group: "social",
		},
		{
			title: "Icona nel Browser (.svg)",
			name: "favicon",
			type: "image",
			description:
				"Carica un'icona SVG (16px × 16px) da usare come iona nel browser",
			options: {
				accept: "image/svg+xml",
			},
			validation: (Rule) => {
				return Rule.custom((field) => {
					if (!field) return true;

					const { dimensions } = decodeAssetUrl(field.asset._ref);

					if (dimensions.width !== 16 || dimensions.height !== 16) {
						return "L'icona deve essere un file SVG (16px × 16px)";
					} else {
						return true;
					}
				});
			},
			group: "icons",
		},
		{
			title: "Icona nei browser datati (.ico)",
			name: "faviconLegacy",
			type: "file",
			description:
				"Carica un file ICO (32px × 32px) da usare come iona nei browser datati",
			validation: (Rule) => {
				return Rule.custom((field) => {
					if (!field) return true;

					const { format } = decodeAssetUrl(field.asset._ref);

					if (format !== "ico") {
						return "L'icona deve essere un file ICO (32px × 32px)";
					} else {
						return true;
					}
				});
			},
			group: "icons",
		},
		{
			title: "Touch Icon (.png)",
			name: "touchIcon",
			type: "image",
			description:
				"Icona per dispositivi mobili. Carica un file PNG (192px × 192px)",
			group: "icons",
		},
	],
	preview: {
		prepare() {
			return {
				title: "Default SEO / Condivisione",
			};
		},
	},
};
