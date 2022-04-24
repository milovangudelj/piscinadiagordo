import { ReactNode } from "react";

export const MarketingGroup = ({ children }: { children: ReactNode }) => {
	return <div className="my-12 flex flex-col gap-y-16">{children}</div>;
};
