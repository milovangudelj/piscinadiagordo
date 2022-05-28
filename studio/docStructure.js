import S from "@sanity/base/structure-builder";
import { singletonDocs } from "./docTypes";

export default [
	...S.defaultInitialValueTemplateItems().filter(
		(doc) => !singletonDocs.includes(doc.spec.id)
	),
];
