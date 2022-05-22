import { User } from "phosphor-react";

export default {
	name: "author",
	title: "Autori",
	type: "document",
	icon: User,
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
		{
			name: "image",
			title: "Immagine",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "bio",
			title: "Bio",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
		},
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
};
