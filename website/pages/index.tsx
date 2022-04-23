import Head from "next/head";

// Components
import { Layout, HeroSection, SponsorSection } from "../components";

const Index = ({ allPosts, preview }: { allPosts: any; preview: boolean }) => {
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Piscina di Agordo</title>
				</Head>
				<HeroSection />
				<SponsorSection />
			</Layout>
		</>
	);
};

export default Index;
