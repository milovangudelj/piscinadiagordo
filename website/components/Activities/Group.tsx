import { ReactNode } from "react";

export const Group = ({ children }: { children: ReactNode }) => {
	return <div className="mt-12 space-y-12">{children}</div>;
};
