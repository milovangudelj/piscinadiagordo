import { ArrowBendRightDown } from "phosphor-react";

export default {
	title: "Menu a tendina",
	name: "navDropdown",
	type: "object",
	icon: ArrowBendRightDown,
	fields: [
		{
			title: "Titolo",
			name: "title",
			type: "string",
			description: "Testo del link principale",
		},
		{
			title: "Pagina",
			name: "page",
			type: "reference",
			to: [{ type: "page" }, { type: "homePage" }],
		},
		{
			title: "Elementi del menu",
			name: "dropdownItems",
			type: "array",
			of: [{ type: "navPage" }, { type: "navLink" }],
		},
	],
};
