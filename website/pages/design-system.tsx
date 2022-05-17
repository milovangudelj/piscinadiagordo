import { Chip, Container, Layout, SectionSeparator } from "../components";

const DesignSystem = () => {
	return (
		<Layout>
			<Container className="my-12">
				<h1>Design Syatem</h1>
				<p>Source of truth for the design system of this website.</p>
			</Container>
			<SectionSeparator className="py-6" />
			<Container className="my-12">
				<h2>Chips</h2>
				<p>Chip element</p>
				<div className="mt-8 space-y-4 rounded-lg bg-gray-200 p-4">
					<div className="flex gap-4">
						<Chip size="lg">Chip</Chip>
						<Chip>Chip</Chip>
						<Chip size="sm">Chip</Chip>
						<Chip variant="outlined" size="lg">
							Chip
						</Chip>
						<Chip variant="outlined">Chip</Chip>
						<Chip variant="outlined" size="sm">
							Chip
						</Chip>
						<Chip variant="borderless" size="lg">
							Chip
						</Chip>
						<Chip variant="borderless">Chip</Chip>
						<Chip variant="borderless" size="sm">
							Chip
						</Chip>
					</div>
					<div className="flex gap-4">
						<Chip color="secondary" size="lg">
							Chip
						</Chip>
						<Chip color="secondary">Chip</Chip>
						<Chip color="secondary" size="sm">
							Chip
						</Chip>
						<Chip color="secondary" variant="outlined" size="lg">
							Chip
						</Chip>
						<Chip color="secondary" variant="outlined">
							Chip
						</Chip>
						<Chip color="secondary" variant="outlined" size="sm">
							Chip
						</Chip>
						<Chip color="secondary" variant="borderless" size="lg">
							Chip
						</Chip>
						<Chip color="secondary" variant="borderless">
							Chip
						</Chip>
						<Chip color="secondary" variant="borderless" size="sm">
							Chip
						</Chip>
					</div>
					<div className="flex gap-4">
						<Chip color="success" size="lg">
							Chip
						</Chip>
						<Chip color="success">Chip</Chip>
						<Chip color="success" size="sm">
							Chip
						</Chip>
						<Chip color="success" variant="outlined" size="lg">
							Chip
						</Chip>
						<Chip color="success" variant="outlined">
							Chip
						</Chip>
						<Chip color="success" variant="outlined" size="sm">
							Chip
						</Chip>
						<Chip color="success" variant="borderless" size="lg">
							Chip
						</Chip>
						<Chip color="success" variant="borderless">
							Chip
						</Chip>
						<Chip color="success" variant="borderless" size="sm">
							Chip
						</Chip>
					</div>
					<div className="flex gap-4">
						<Chip color="error" size="lg">
							Chip
						</Chip>
						<Chip color="error">Chip</Chip>
						<Chip color="error" size="sm">
							Chip
						</Chip>
						<Chip color="error" variant="outlined" size="lg">
							Chip
						</Chip>
						<Chip color="error" variant="outlined">
							Chip
						</Chip>
						<Chip color="error" variant="outlined" size="sm">
							Chip
						</Chip>
						<Chip color="error" variant="borderless" size="lg">
							Chip
						</Chip>
						<Chip color="error" variant="borderless">
							Chip
						</Chip>
						<Chip color="error" variant="borderless" size="sm">
							Chip
						</Chip>
					</div>
					<div className="flex gap-4">
						<Chip disabled size="lg">
							Chip
						</Chip>
						<Chip disabled>Chip</Chip>
						<Chip disabled size="sm">
							Chip
						</Chip>
						<Chip disabled variant="outlined" size="lg">
							Chip
						</Chip>
						<Chip disabled variant="outlined">
							Chip
						</Chip>
						<Chip disabled variant="outlined" size="sm">
							Chip
						</Chip>
						<Chip disabled variant="borderless" size="lg">
							Chip
						</Chip>
						<Chip disabled variant="borderless">
							Chip
						</Chip>
						<Chip disabled variant="borderless" size="sm">
							Chip
						</Chip>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default DesignSystem;
