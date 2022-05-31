import { LinkSimpleHorizontal } from "phosphor-react";

import { getStaticRoute, getDynamicRoute } from "../../lib/helpers";

export default {
	title: "Pagina",
	name: "navPage",
	type: "object",
	icon: LinkSimpleHorizontal,
	fields: [
		{
			title: "Titolo",
			name: "title",
			type: "string",
			description: "Testo del link",
		},
		{
			title: "Pagina",
			name: "page",
			type: "reference",
			to: [{ type: "page" }, { type: "homePage" }],
		},
	],
	preview: {
		select: {
			title: "title",
			pageType: "page._type",
			pageSlug: "page.slug.current",
		},
		prepare({ title, pageType, pageSlug }) {
			const isStatic = getStaticRoute(pageType);
			const isDynamic = getDynamicRoute(pageType);

			return {
				title: title,
				subtitle:
					isStatic !== false
						? `/${isStatic}`
						: `/${isDynamic ? `${isDynamic}/` : ""}${pageSlug}`,
			};
		},
	},
};
