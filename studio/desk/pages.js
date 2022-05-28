import S from "@sanity/desk-tool/structure-builder";

import { House, Browser, Warning } from "phosphor-react";

import { standardViews } from "./previews/standard";
import { reusableSections } from "./sections";

export const pagesMenu = S.listItem()
	.title("Pagine")
	.id("pages")
	.child(
		S.list()
			.title("Pagine")
			.items([
				S.listItem()
					.title("Home")
					.icon(House)
					.child(
						S.document()
							.schemaType("homePage")
							.documentId("homePage")
							.views(standardViews)
					),
				S.listItem()
					.title("404")
					.icon(Warning)
					.child(
						S.document()
							.schemaType("errorPage")
							.documentId("errorPage")
							.views(standardViews)
					),
				S.listItem()
					.title("Altre Pagine")
					.schemaType("page")
					.child(
						S.documentTypeList("page")
							.title("Altre Pagine")
							.filter(
								`_type == "page" && !(_id in [
									"homePage",
									"errorPage",
								]) && !(_id in path("drafts.**"))`
							)
							.child((documentId) =>
								S.document()
									.documentId(documentId)
									.schemaType("page")
									.views(standardViews)
							)
							.canHandleIntent(
								(intent, { type }) =>
									["create", "edit"].includes(intent) &&
									type === "page"
							)
					),
				S.divider(),
				reusableSections,
			])
	)
	.icon(Browser);
