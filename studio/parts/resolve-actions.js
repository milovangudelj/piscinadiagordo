import defaultResolve, {
	PublishAction,
	DiscardChangesAction,
} from "part:@sanity/base/document-actions";

import { singletonDocs } from "../docTypes";

export default function resolveDocumentActions(props) {
	const isSingle = singletonDocs.indexOf(props.type) > -1;

	if (isSingle) {
		return [PublishAction, DiscardChangesAction];
	}

	return [...defaultResolve(props)];
}
