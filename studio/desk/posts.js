import S from "@sanity/desk-tool/structure-builder";
import { Files, Folder, Funnel, PencilSimple } from "phosphor-react";

export const postsMenu = S.listItem()
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
												S.documentTypeList("post")
													.filter(
														"$categoryId in categories[]._ref"
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
												S.documentTypeList("post")
													.filter("$authorId == author._ref")
													.params({ authorId })
											)
									),
							])
					),
			])
	);
