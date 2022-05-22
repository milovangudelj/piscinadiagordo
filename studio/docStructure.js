import S from "@sanity/base/structure-builder";

const singletons = [
	"generalSettings",
	"cookieSettings",
	"noticeSettings",
	"headerSettings",
	"footerSettings",
	"shopSettings",
	"seoSettings",
	"media.tag", // for media plugin
	"homePage",
];

export default [
	...S.defaultInitialValueTemplateItems().filter(
		(doc) => !singletons.includes(doc.spec.id)
	),
];
