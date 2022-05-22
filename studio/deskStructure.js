import S from "@sanity/desk-tool/structure-builder";
import { Files, Folder, Funnel, PencilSimple } from "phosphor-react";
import React from "react";

import { settingsMenu } from "./desk/settings";
import { pagesMenu } from "./desk/pages";

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

const hiddenDocTypes = (listItem) =>
	![
		"post",
		"page",
		"section",
		"product",
		"productVariant",
		"collection",
		"filter",
		"solidColor",

		"generalSettings",
		"cookieSettings",
		"noticeSettings",
		"headerSettings",
		"footerSettings",
		"shopSettings",
		"seoSettings",
		"siteNavigation",
		"homePage",
		"errorPage",

		"menu",
		"siteSettings",
		"redirect",
		"media.tag", // for media plugin
	].includes(listItem.getId());

export default () =>
	S.list()
		.title("Sito")
		.items([
			settingsMenu,
			S.divider(),
			pagesMenu,
			S.divider(),
			S.listItem()
				.title("Post")
				.icon(PencilSimple)
				.child(
					S.list()
						.title("Post")
						.items([
							S.listItem()
								.title("Tutti")
								.icon(Files)
								.child(
									S.documentList()
										.title("Tutti i post")
										.filter('_type == "post"')
								),
							S.listItem()
								.title("Filtrati")
								.icon(Funnel)
								.child(
									S.list()
										.title("Post filtrati")
										.items([
											S.listItem()
												.title("Per Categoria")
												.icon(Folder)
												.child(
													S.documentTypeList("category")
														.title("Per Categoria")
														.child((categoryId) =>
															S.documentList()
																.filter(
																	'_type == "post" && $categoryId in categories[]._ref'
																)
																.params({ categoryId })
														)
												),
											S.listItem()
												.title("Per Autore")
												.icon(Folder)
												.child(
													S.documentTypeList("author")
														.title("Per Autore")
														.child((authorId) =>
															S.documentList()
																.title("Posts")
																.filter(
																	'_type == "post" && $authorId == author._ref'
																)
																.params({ authorId })
														)
												),
										])
								),
						])
				),
			S.divider(),

			// Filter out docs already defined above
			...S.documentTypeListItems().filter(hiddenDocTypes),
		]);
