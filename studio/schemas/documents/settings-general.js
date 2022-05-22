export default {
	name: "generalSettings",
	title: "Impostazioni Generali",
	type: "document",
	__experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
	groups: [
		{ title: "Dettagli", name: "details", default: true },
		{ title: "Avanzate", name: "advanced" },
	],
	fields: [
		{
			name: "title",
			title: "Titolo del Sito",
			description:
				"Il nome del tuo sito, generalmente il nome del tuo brand/società",
			type: "string",
			group: "details",
		},
		{
			name: "siteURL",
			title: "URL Live del Sito",
			description: "Il dominio o sottodominio base del tuo sito",
			type: "url",
			validation: (Rule) => Rule.required(),
			group: "details",
		},
		{
			title: "Google Tag Manager (GTM)",
			description:
				"Per abilitare GTM inserisci il tuo Container ID qua sotto",
			name: "gtmID",
			type: "string",
			group: "advanced",
		},
	],
};
