import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import sanityClient from "part:@sanity/base/client";
import { IntentLink, Link } from "part:@sanity/base/router";

import { Card, Stack, Text } from "@sanity/ui";

import { House, Browser, ShoppingCart, WarningOctagon } from "phosphor-react";

import { standardViews } from "./previews/standard";

const EmptyNotice = ({ title, type, link, linkTitle }) => {
	if (!title || !type || !link || !linkTitle) return null;

	return (
		<Card padding={4}>
			<Card padding={[5]} radius={2} shadow={1} tone="critical">
				<Stack space={[3]}>
					<Text align="center" size={[2]} weight="semibold">
						The {title} has not been set.
					</Text>
					<Text align="center" size={[2]}>
						Set your {title} from the <Link href={link}>{linkTitle}</Link>
					</Text>
				</Stack>
			</Card>

			<Stack padding={3} space={[3]}>
				<Text align="center" muted size={[1]}>
					Don't have a {type} yet?{" "}
					<IntentLink intent="create" params={{ type }}>
						Create one now
					</IntentLink>
				</Text>
			</Stack>
		</Card>
	);
};

// Extract our home page
const currentHomePage = S.listItem()
	.title("Home")
	.icon(House)
	.child(async () => {
		const data = await sanityClient.fetch(`
			*[_type == "generalSettings"][0]{
				home->{_id}
			}
		`);

		if (!data?.home)
			return S.component(() => (
				<EmptyNotice
					title="Home Page"
					type="page"
					link="settings;general"
					linkTitle="General Settings"
				/>
			)).title("Home Page");

		return S.document()
			.id(data.home._id)
			.schemaType("page")
			.views(standardViews);
	});

// Extract our error page
const currentErrorPage = S.listItem()
	.title("Pagina 404")
	.icon(WarningOctagon)
	.child(async () => {
		const data = await sanityClient.fetch(`
			*[_type == "generalSettings"][0]{
				error->{_id}
			}
		`);

		if (!data?.error)
			return S.component(() => (
				<EmptyNotice
					title="Pagina 404"
					type="page"
					link="impostazioni;generali"
					linkTitle="Impostazioni generali"
				/>
			)).title("Pagina 404");

		return S.document()
			.id(data.error._id)
			.schemaType("page")
			.views(standardViews);
	});

export const pagesMenu = S.listItem()
	.title("Pagine")
	.id("pages")
	.child(
		S.list()
			.title("Pagine")
			.items([
				// currentHomePage,
				S.documentTypeListItem("page")
					.title("Home")
					.icon(House)
					.id("homePage")
					.child((documentId) =>
						S.document()
							.documentId(documentId)
							.schemaType("page")
							.views(standardViews)
					),
				S.documentTypeListItem("page")
					.title("Pagina 404")
					.icon(WarningOctagon)
					.id("errorPage")
					.child((documentId) =>
						S.document()
							.documentId(documentId)
							.schemaType("page")
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
				S.listItem()
					.title("Reusable Sections")
					.schemaType("section")
					.child(
						S.documentTypeList("section")
							.title("Reusable Sections")
							.child((documentId) =>
								S.document()
									.documentId(documentId)
									.schemaType("section")
									.views(standardViews)
							)
							.canHandleIntent(
								(intent, { type }) =>
									["create", "edit"].includes(intent) &&
									type === "section"
							)
					),
			])
	)
	.icon(Browser);
