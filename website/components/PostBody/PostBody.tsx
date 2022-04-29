import { PortableText } from "@portabletext/react";

import markdownStyles from "./markdown-styles.module.css";

export const PostBody = ({ content }: { content: any }) => {
	return (
		<div className={`mx-auto max-w-prose ${markdownStyles.markdown}`}>
			<PortableText value={content} />
		</div>
	);
};
