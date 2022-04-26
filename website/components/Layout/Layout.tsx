import { Alert, Footer, Meta } from "../";
import { Navbar } from "../Navbar";

export const Layout = ({ children }: { children: any }) => {
	return (
		<>
			<Meta />
			<Navbar />
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};
