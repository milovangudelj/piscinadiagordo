// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Singletons
import generalSettings from "./documents/settings-general";
import cookieSettings from "./documents/settings-cookie";
import noticeSettings from "./documents/settings-notice";
import seoSettings from "./documents/settings-seo";
import headerSettings from "./documents/settings-header";
import footerSettings from "./documents/settings-footer";
import homePage from "./pages/homePage";
import errorPage from "./pages/errorPage";

import redirect from "./documents/redirect";
import page from "./documents/page";

// Module types
import grid from "./modules/grid";
import hero from "./modules/hero";
import marquee from "./modules/marquee";
import dividerPhoto from "./modules/divider-photo";
import collectionGrid from "./modules/collection-grid";

// Object types
import gridColumn from "./objects/grid-column";
import gridSize from "./objects/grid-size";
import seo from "./objects/seo";

import navDropdown from "./objects/nav-dropdown";
import navPage from "./objects/nav-page";
import navLink from "./objects/nav-link";

import complexPortableText from "./objects/portable-complex";
import simplePortableText from "./objects/portable-simple";

// Objects

import objects from "./objects";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import corso from "./corso";
import frequenza from "./frequenza";
import sponsor from "./sponsor";
import person from "./person";
import role from "./role";

import horizontalRule from "./objects/horizontal-rule";
import freeform from "./objects/freeform";
import accordions from "./objects/accordions";
import accordion from "./objects/accordion";

// Sections

import sections from "./sections";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* ----------------- */
		/* 1: Document types */
		page,

		// Fixed Pages
		homePage,
		errorPage,

		// Singletons
		generalSettings,
		cookieSettings,
		noticeSettings,
		seoSettings,
		headerSettings,
		footerSettings,

		redirect,

		// Modules
		grid,
		hero,
		marquee,
		dividerPhoto,
		collectionGrid,

		/* ----------------------- */
		/* 3: Generic Object types */
		gridColumn,
		gridSize,
		seo,

		navDropdown,
		navPage,
		navLink,
		horizontalRule,

		complexPortableText,
		simplePortableText,

		freeform,
		accordions,
		accordion,

		// Objects
		...objects,

		// Sections
		...sections,

		// The following are document types which will appear
		// in the studio.
		post,
		author,
		category,
		corso,
		frequenza,
		sponsor,
		person,
		role,
		// When added to this list, object types can be used as
		// { type: 'typename' } in other document schemas
		blockContent,
	]),
});
