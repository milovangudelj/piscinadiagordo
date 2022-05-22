import { Calendar } from "phosphor-react";

export default {
	name: "frequenza",
	title: "Frequenze",
	type: "document",
	icon: Calendar,
	fields: [
		{
			name: "name",
			title: "Nome",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
	],
};
