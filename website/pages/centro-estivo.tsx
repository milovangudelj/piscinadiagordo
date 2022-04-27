import Image from "next/image";
import {
	Button,
	Container,
	Header,
	Layout,
	SectionSeparator,
} from "../components";

// Assets
import headerImage from "../public/assets/images/ashton-bingham-SAHBl2UpXco-unsplash.webp";
import volantino from "../public/assets/images/estate-lungo-rova-2022.webp";

const CentroEstivo = () => {
	return (
		<Layout>
			<Header
				title="Centro Estivo"
				image={headerImage}
				imageAlt="Foto di bambini che giocano in un parco"
			>
				<p>
					Il Team della Piscina Comprensoriale di Agordo organizza ogni
					estate centri estivi per bambini e ragazzi dai 6 ai 13 anni. I
					nostri centri estivi si basano su attività di multisport quali
					tennis, nuoto, pattinaggio e attività di palestra. La scorsa
					edizione si è conclusa con grande successo e divertimento.
				</p>
			</Header>
			<SectionSeparator className="py-6" />
			<Container className="my-12">
				<div className="flex">
					<div className="relative aspect-[3/4] w-[300px]">
						<Image
							src={volantino}
							layout="fill"
							objectFit="cover"
							alt="Foto del volantino"
						/>
					</div>
					<div className="ml-12">
						<h2 className="mb-6">Estate Lungo Rova - 2022</h2>
						<div className="space-y-4 text-base">
							<p>
								Le attività inizieranno lunedì 20 giugno e termineranno
								venerdì 26 agosto dalle 8.30 alle 12.30.
							</p>
							<p>Le attività proposte saranno le seguenti:</p>
							<p>
								LUNEDÌ: nuoto e basket <br />
								MARTEDÌ: tennis e unihockey <br />
								MERCOLEDÌ: volley e calcetto <br />
								GIOVEDÌ: nuoto e tennis <br />
								VENERDÌ: atletica
							</p>
							<Button
								as="a"
								href="https://forms.gle/Hva4C4HMkqhdJjvWA"
								rel="noreferrer noopener"
								target="_blank"
							>
								Iscriviti subito!
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default CentroEstivo;
