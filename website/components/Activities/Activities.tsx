import { ReactNode } from "react";

// Components
import { Container } from "../Container";

// Namespaced components
import { Header } from "./Header";
import { Group } from "./Group";

export const Activities = ({ children }: { children: ReactNode }) => {
	return <Container className="my-12">{children}</Container>;
};

Activities.Header = Header;
Activities.Group = Group;
