export default {
	title: "Impostazioni Consenso Cookie",
	name: "cookieSettings",
	type: "document",
	fields: [
		{
			name: "cookiePolicyNote",
			type: "note",
			options: {
				headline: "Importante",
				message:
					'Questo mostra una notifica di "consenso implicito" agli utenti per essere in regola con le normative europee sulla priacy (GDPR). Si consiglia di inserire un link alla pagina sull\'uso dei cookie o a quella sulla politica di privacy.',
				tone: "caution",
			},
		},
		{
			title: "Abilitare il consenso ai cookie?",
			name: "enabled",
			type: "boolean",
		},
		{
			title: "Messaggio",
			name: "message",
			type: "text",
			rows: 2,
			description: "Il messaggio da mostrare nel popup",
			hidden: ({ parent }) => !parent.enabled,
		},
		{
			title: "Link",
			name: "link",
			type: "reference",
			to: [{ type: "page" }],
			description:
				'Mostra un link "Per saperne di più" sulla politica dei cookie',
			hidden: ({ parent }) => !parent.enabled,
		},
	],
	preview: {
		prepare() {
			return {
				title: "Impostazioni Consenso Cookie",
			};
		},
	},
};
