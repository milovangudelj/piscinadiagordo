import S from "@sanity/desk-tool/structure-builder";

import { DiamondsFour } from "phosphor-react";

import { sectionsSB } from "../schemas/sections";
const {
	heroSectionSB,
	headerSectionSB,
	newsSectionSB,
	sponsorSectionSB,
	cardSectionSB,
} = sectionsSB;

export const reusableSections = S.listItem()
	.title("Sezioni riutilizzabili")
	.schemaType("section")
	.child(
		S.list()
			.title("Sezioni")
			.items([
				heroSectionSB,
				newsSectionSB,
				sponsorSectionSB,
				S.divider(),
				S.listItem()
					.title("Generiche")
					.icon(DiamondsFour)
					.child(
						S.list()
							.title("Generiche")
							.items([
								cardSectionSB,
								headerSectionSB,
								S.listItem()
									.title("Sezioni")
									.icon(DiamondsFour)
									.child(
										S.documentTypeList("section").showIcons(true)
									),
							])
					),
			])
	);
