import { Warning } from "phosphor-react";
import page from "../documents/page";

export default {
	...page,
	title: "Pagina 404",
	name: "errorPage",
	icon: Warning,
	fields: [
		...page.fields.filter(
			(el) => el.name !== "modules" && el.name !== "slug"
		),
		{
			name: "errorTitle",
			title: "Titolo dell'errore",
			type: "string",
			validation: (Rule) => Rule.required(),
			group: "content",
		},
		{
			name: "errorContent",
			title: "Messaggio dell'errore",
			type: "string",
			validation: (Rule) => Rule.required(),
			group: "content",
		},
		{
			name: "returnTo",
			title: "Ritorna a",
			description:
				"Link ad una pagina a cui tornare premendo il pulsante sottostante la descrizione",
			type: "reference",
			to: [{ type: "page" }, { type: "homePage" }],
			validation: (Rule) => Rule.required(),
			group: "content",
		},
	],
	preview: {
		select: {
			title: "title",
		},
		prepare({ title = "Senza titolo" }) {
			return {
				title,
				subtitle: "/404",
			};
		},
	},
};
