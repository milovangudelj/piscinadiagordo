import Head from "next/head";

// Components
import { Layout, HeroSection } from "../components";

const Index = ({ allPosts, preview }: { allPosts: any; preview: boolean }) => {
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Piscina di Agordo</title>
				</Head>
				<HeroSection />
			</Layout>
		</>
	);
};

export default Index;
