import { Container } from "../Container";

export const SectionSeparator = ({ className }: { className?: string }) => {
	return (
		<Container className={className}>
			<hr className="border-gray-100" />
		</Container>
	);
};
