import S from "@sanity/desk-tool/structure-builder";

import { DiamondsFour, Rows } from "phosphor-react";

import { sectionsSB } from "../schemas/sections";
const {
	heroSectionSB,
	newsSectionSB,
	sponsorSectionSB,
	teamSectionSB,
	collaboratorsSectionSB,
	headerSectionSB,
} = sectionsSB;

export const reusableSections = S.listItem()
	.title("Sezioni riutilizzabili")
	.icon(DiamondsFour)
	.child(
		S.list()
			.title("Sezioni")
			.items([
				heroSectionSB,
				newsSectionSB,
				sponsorSectionSB,
				teamSectionSB,
				collaboratorsSectionSB,
				S.divider(),
				S.listItem()
					.title("Generiche")
					.icon(DiamondsFour)
					.child(
						S.list()
							.title("Generiche")
							.items([
								S.listItem()
									.title("Gruppo card")
									.icon(Rows)
									.child(
										S.documentTypeList("cardSection")
											.schemaType("cardSection")
											.showIcons(true)
									),
								headerSectionSB(),
							])
					),
			])
	);
