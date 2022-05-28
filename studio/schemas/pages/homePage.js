import { House } from "phosphor-react";
import page from "../documents/page";

export default {
	...page,
	title: "Home",
	name: "homePage",
	icon: House,
	fields: [...page.fields.filter((el) => el.name !== "slug")],
	preview: {
		select: {
			title: "title",
		},
		prepare({ title = "Senza titolo" }) {
			return {
				title,
				subtitle: "/",
			};
		},
	},
};
