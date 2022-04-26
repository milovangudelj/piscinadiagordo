import Link from "next/link";

// Components
import {
	Button,
	Container,
	Header,
	Layout,
	MarketingBlock,
	MarketingGroup,
	SectionSeparator,
} from "../components";

// Assets
import internoPiscina from "../public/assets/images/interno-piscina.webp";
import imagePriv from "../public/assets/images/corsi-privati.webp";
import imageInterno from "../public/assets/images/interno-piscina-2.webp";
import imageAcquafitness from "../public/assets/images/acquafitness.webp";
import imageFisio from "../public/assets/images/idrokinesiterapia.webp";

const Piscina = () => {
	return (
		<Layout>
			<Header
				title="Piscina"
				image={internoPiscina}
				imageAlt="Foto del piano vasca della piscina"
			>
				<p>
					Lo sapevi che il nostro impianto ha compiuto 20 anni
					l&apos;ottobre scorso? E&apos; stato infatti inaugurato il 6
					ottobre del 2000. L&apos;impianto è costituito da una vasca 25
					metri per 13 metri ed è suddivisa in sei corsie con profondità da
					1,20m a 1,60m. Inoltre la piscina è accessibile a persone con
					disabilità o mobilità ridotta e, per favorir loro un accesso alla
					vasca ancora più confortevole, avranno a loro disposizione un
					sollevatore fisso.
				</p>
			</Header>
			<SectionSeparator className="py-6" />
			<MarketingGroup>
				<MarketingBlock
					title="Corsi"
					ctaText="Scopri di più"
					ctaLink="/piscina/corsi"
					image={imagePriv}
					imageAlt="Foto di una persona che nuota"
				>
					<p className="mb-6">
						Elenco dei corsi attivi presso la Piscina di Agordo.
					</p>
					<p>Disponibilità e orari: 2022</p>
				</MarketingBlock>
				<MarketingBlock
					title="Nuoto libero e Solarium"
					ctaText="Scopri di più"
					ctaLink="/piscina/nuoto-libero"
					image={imageInterno}
					imageAlt="Foto del piano vasca della piscina"
					side="right"
				>
					<p className="mb-6">
						Per i momenti di relax, sport e benessere fisico.
					</p>
					<p>
						Disponibilità e orari: <br />
						2022
					</p>
				</MarketingBlock>
				<MarketingBlock
					title="Acquafitness"
					ctaText="Scopri di più"
					ctaLink="/piscina/acquafitness"
					image={imageAcquafitness}
					imageAlt="Foto di un corso di acquafitness"
				>
					<p className="mb-6">
						Corsi e informazioni relative alle attività organizzate presso
						la piscina di Agordo di acquagym, circuit training e
						ginnastica dolce in acqua.
					</p>
					<p>Disponibilità e orari: 2022</p>
				</MarketingBlock>
				<MarketingBlock
					title="Fisioterapia"
					ctaText="Scopri di più"
					ctaLink="/piscina/fisioterapia"
					image={imageFisio}
					imageAlt="Foto di un esercizio di fisioterapia"
					side="right"
				>
					<p className="mb-6">
						Attività riabilitative in acqua disponibili presso la nostra
						piscina.
					</p>
					<p>Disponibilità e orari: 2022</p>
				</MarketingBlock>
			</MarketingGroup>
			<SectionSeparator className="py-6" />
			<Container className="mb-6 py-12">
				<h2>Agevolazioni</h2>
				<p className="my-6 text-base">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum in
					at non vel elementum, aenean urna. Vitae diam consectetur enim
					aliquet tortor lorem luctus. Imperdiet netus congue eget
					consequat. Nisl at velit tempor arcu. Nisl vitae eu commodo sed.
					At suspendisse at sit nunc, condimentum. Volutpat non, eget morbi
					purus. Consequat interdum pellentesque eu facilisis.
				</p>
				<Button as={Link} href="/piscina/agevolazioni" passHref>
					Scopri di più
				</Button>
			</Container>
		</Layout>
	);
};

export default Piscina;
