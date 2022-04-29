import { ReactNode } from "react";

export const PostTitle = ({ children }: { children: ReactNode }) => {
	return <h1 className="text-h1 font-semibold">{children}</h1>;
};
