import S from "@sanity/desk-tool/structure-builder";
import {
	Anchor,
	Compass,
	Cookie,
	FlagBanner,
	Gear,
	Globe,
	Shuffle,
} from "phosphor-react";

export const settingsMenu = S.listItem()
	.title("Impostazioni")
	.icon(Gear)
	.child(
		S.list()
			.title("Impostazioni")
			.items([
				S.listItem()
					.title("Generali")
					.icon(Gear)
					.child(
						S.document()
							.schemaType("generalSettings")
							.documentId("generalSettings")
					),
				S.divider(),
				S.listItem()
					.title("Barra di navigazione")
					.icon(Compass)
					.child(
						S.document()
							.schemaType("headerSettings")
							.documentId("headerSettings")
					),
				S.listItem()
					.title("Piè di pagina")
					.icon(Anchor)
					.child(
						S.document()
							.schemaType("footerSettings")
							.documentId("footerSettings")
					),
				S.divider(),
				S.listItem()
					.title("Consenso Cookie")
					.child(
						S.editor()
							.id("cookieSettings")
							.schemaType("cookieSettings")
							.documentId("cookieSettings")
					)
					.icon(Cookie),
				S.listItem()
					.title("Avviso")
					.icon(FlagBanner)
					.child(
						S.editor()
							.id("noticeSettings")
							.schemaType("noticeSettings")
							.documentId("noticeSettings")
					),
				S.divider(),
				S.listItem()
					.title("Default SEO / Condivisione")
					.icon(Globe)
					.child(
						S.document()
							.schemaType("seoSettings")
							.documentId("seoSettings")
					),
				S.listItem()
					.title("Reindirizzi")
					.icon(Shuffle)
					.child(S.documentTypeList("redirect").title("Reindirizzi")),
			])
	);
