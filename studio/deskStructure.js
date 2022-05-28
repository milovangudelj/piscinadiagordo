import S from "@sanity/desk-tool/structure-builder";
import React from "react";

// Menus
import { settingsMenu } from "./desk/settings";
import { pagesMenu } from "./desk/pages";
import { postsMenu } from "./desk/posts";

// Doc types
import { hiddenDocs } from "./docTypes";

const JsonPreview = ({ document }) => (
	<>
		<h1>JSON Data for "{document.displayed.title}"</h1>
		<pre>{JSON.stringify(document.displayed, null, 2)}</pre>
	</>
);

export const getDefaultDocumentNode = ({ documentId, schemaType }) => {
	if (schemaType === "post" || documentId === "siteSettings") {
		return S.document().views([
			S.view.form(),
			S.view.component(JsonPreview).title("JSON"),
		]);
	}
};

const hiddenDocTypes = (listItem) => !hiddenDocs.includes(listItem.getId());

export default () =>
	S.list()
		.title("Sito")
		.items([
			settingsMenu,
			S.divider(),
			pagesMenu,
			S.divider(),
			postsMenu,
			S.divider(),

			// Filter out docs already defined above
			...S.documentTypeListItems().filter(hiddenDocTypes),
		]);
