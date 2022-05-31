import { ReactNode } from "react";
import cn from "classnames";

import { Alert, Footer, Meta, Navbar } from "../";

export const Layout = ({
	children,
	main = "auto",
	navItems = [],
}: {
	children: ReactNode;
	main?: "full" | "screen" | "auto";
	navItems?: any[];
}) => {
	return (
		<>
			<Meta />
			<div className="min-h-screen">
				<Navbar navItems={navItems} />
				<main
					className={cn(
						{ "h-full": main === "full" },
						{ "h-screen": main === "screen" },
						{ "h-auto": main === "auto" }
					)}
				>
					{children}
				</main>
			</div>
			<Footer />
		</>
	);
};
