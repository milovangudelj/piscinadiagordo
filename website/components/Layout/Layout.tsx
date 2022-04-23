import { Alert, Footer, Meta } from "../";
import { Navbar } from "../Navbar";

export const Layout = ({
	preview,
	children,
}: {
	preview: boolean;
	children: any;
}) => {
	return (
		<>
			<Meta />
			<Navbar />
			<div className="min-h-screen">
				{/* <Alert preview={preview} /> */}
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};
