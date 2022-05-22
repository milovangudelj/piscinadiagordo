import React from "react";
import { Shuffle } from "phosphor-react";

export default {
	title: "Reindirizzo",
	name: "redirect",
	type: "document",
	icon: () => <Shuffle />,
	fields: [
		{
			title: "Da (slug)",
			name: "from",
			type: "string",
			description: (
				<>
					Non includere tutto il nome di dominio o lo slash iniziale. Ad
					esempio: <code>pagina-vecchia</code>
				</>
			),
		},
		{
			title: "A (slug)",
			name: "to",
			type: "string",
			description: (
				<>
					Non includere tutto il nome di dominio o lo slash iniziale. Ad
					esempio: <code>pagina-nuova</code>
				</>
			),
		},
		{
			title: "È un reindirizzo permanente (301)?",
			name: "isPermanent",
			type: "boolean",
		},
	],
	initialValue: {
		isPermanent: true,
	},
	preview: {
		select: {
			to: "to",
			from: "from",
			isPermanent: "isPermanent",
		},
		prepare({ from, to, isPermanent }) {
			return {
				title: from && to ? `(${from}) → (${to})` : "Nuovo Reindirizzo",
				subtitle: isPermanent ? "301" : "302",
			};
		},
	},
};
