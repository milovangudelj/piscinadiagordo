import { DiamondsFour } from "phosphor-react";

import { getModuleName } from "../../lib/helpers";

export default {
	title: "Sezione",
	name: "section",
	type: "document",
	icon: DiamondsFour,
	fields: [
		{
			title: "Nome",
			name: "name",
			type: "string",
			description: "Dai un nome alla sezione. Solo per uso interno.",
			validation: (Rule) => Rule.required(),
		},
		{
			title: "Contenuto",
			name: "content",
			type: "array",
			of: [
				{ type: "grid" },
				{ type: "hero" },
				{ type: "marquee" },
				{ type: "dividerPhoto" },
			],
			validation: (Rule) =>
				Rule.length(1).error("Una sezone può contenere solo un componente"),
		},
	],
	preview: {
		select: {
			name: "name",
			content: "content.0",
		},
		prepare({ name, content }) {
			return {
				title: name,
				subtitle: getModuleName(content._type),
			};
		},
	},
};
