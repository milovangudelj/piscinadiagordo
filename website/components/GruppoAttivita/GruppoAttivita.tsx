import { ReactNode } from "react";
import { Container } from "../Container";

export const GruppoAttivita = ({ children }: { children: ReactNode }) => {
	return (
		<Container className="my-12">
			<h2>Le nostre attività</h2>
			<p className="mt-4 text-base">
				Il nostro Team super dinamico organizza varie attività sportive di
				gruppo per adulti e non solo. Scopri con noi quali.
			</p>
			<div className="mt-12 space-y-12">{children}</div>
		</Container>
	);
};
