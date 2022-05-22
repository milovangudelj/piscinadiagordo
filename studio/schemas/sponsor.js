import { Coins } from "phosphor-react";

export default {
	name: "sponsor",
	title: "Sponsor",
	type: "document",
	icon: Coins,
	fields: [
		{
			name: "name",
			title: "Nome",
			type: "string",
		},
		{
			name: "logo",
			title: "Logo",
			type: "image",
		},
		{
			name: "tier",
			title: "Livello",
			type: "number",
		},
	],
};
