import defaultResolve, {
	PublishAction,
	DiscardChangesAction,
	DeleteAction,
} from "part:@sanity/base/document-actions";

const singletons = [
	"generalSettings",
	"cookieSettings",
	"noticeSettings",
	"headerSettings",
	"footerSettings",
	"seoSettings",
	"siteNavigation",
	"homePage",
];

const previews = ["page", "collection"];

export default function resolveDocumentActions(props) {
	const isSingle = singletons.indexOf(props.type) > -1;
	const canPreview = previews.indexOf(props.type) > -1;

	if (isSingle) {
		return [PublishAction, DiscardChangesAction];
	}

	return [...defaultResolve(props)];
}
