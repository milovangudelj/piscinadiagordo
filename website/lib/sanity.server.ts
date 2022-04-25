/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient } from "next-sanity";
import { config } from "./sanityConfig";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
	...config,
	useCdn: false,
	token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview:boolean = false) => (usePreview ? previewClient : sanityClient)

export function overlayDrafts(docs: any) {
	const documents = docs || [];
	const overlayed = documents.reduce((map: any, doc: any) => {
		if (!doc._id) {
			throw new Error("Ensure that `_id` is included in query projection");
		}

		const isDraft = doc._id.startsWith("drafts.");
		const id = isDraft ? doc._id.slice(7) : doc._id;
		return isDraft || !map.has(id) ? map.set(id, doc) : map;
	}, new Map());

	return Array.from(overlayed.values());
}
