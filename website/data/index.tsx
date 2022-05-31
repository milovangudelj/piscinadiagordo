import { getClient } from "../lib/sanity.server";
import * as queries from "./queries";

export const getPage = async (
	slug: string | string[] = "",
	preview: boolean = false
) => {
	const slugs = JSON.stringify([slug, `/${slug}`, `/${slug}/`]);

	const query = `
	{
		"page": *[_type == "page" && slug.current in ${slugs}] | order(_updatedAt desc)[0]
   }
	`;

	const data = await getClient(preview).fetch(query);

	return data;
};
