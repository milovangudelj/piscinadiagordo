import Head from "next/head";

// Components
import {
	Layout,
	HeroSection,
	SponsorSection,
	SectionSeparator,
	MarketingBlock,
	MarketingGroup,
	RecentNews,
} from "../components";

// Assets
import imageWho from "../public/assets/images/chi-siamo.webp";
import imageAttivita from "../public/assets/images/attività.webp";

// Sanity
import { getClient } from "../lib/sanity.server";
import { recentPostsQuery, sponsorQuery } from "../lib/queries";

export const getStaticProps = async () => {
	const { sponsors } = await getClient().fetch(sponsorQuery);
	const { posts } = await getClient().fetch(recentPostsQuery);

	return {
		props: {
			sponsors,
			posts,
		},
	};
};

const Home = ({ sponsors, posts }: { sponsors: any[]; posts: any[] }) => {
	return (
		<>
			<Layout>
				<Head>
					<title>Piscina di Agordo</title>
				</Head>
				<HeroSection />
				<SponsorSection sponsors={sponsors} />
				<SectionSeparator />
				<MarketingGroup>
					<MarketingBlock
						title="Chi siamo"
						ctaText="Il nostro team"
						ctaLink="/team"
						image={imageWho}
						imageAlt="Foto della piscina al tramonto"
					>
						<p className="mb-6">
							Siamo nuotatori per passione e ci impegnamo giorno dopo
							giorno per trasmetterla a voi.
						</p>
						<p>
							Un team unito con una visione in comune: la piscina come
							luogo di benessere e di incontro per tutti.
						</p>
					</MarketingBlock>
					<MarketingBlock
						title="Attività"
						ctaText="Scopri i corsi"
						ctaLink="/piscina/corsi"
						image={imageAttivita}
						imageAlt="Foto di uno dei corsi di nuoto per ragazzi"
						side="right"
					>
						<p>
							La Piscina Comprensoriale di Agordo offre molteplici
							attività natatorie per sfruttare i benefici del movimento
							in acqua, in un ambiente familiare e confortevole, sotto la
							guida di istruttori dinamici e preparati.
						</p>
					</MarketingBlock>
				</MarketingGroup>
				<SectionSeparator />
				<RecentNews title="News" posts={posts} />
			</Layout>
		</>
	);
};

export default Home;
