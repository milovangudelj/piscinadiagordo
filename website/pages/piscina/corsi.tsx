import { GetStaticProps } from "next";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

// Components
import {
	Activities,
	Button,
	Container,
	Layout,
	SectionSeparator,
} from "../../components";

// Lib
import { queryCorsi } from "../../lib/queries";
import { urlForImage } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";

// Types
import { Corso } from "../../lib/types";

export const getStaticProps: GetStaticProps = async () => {
	const { corsi } = await getClient().fetch(queryCorsi);

	return {
		props: {
			corsi,
		},
	};
};

const Corsi = ({ corsi }: { corsi: Corso[] }) => {
	return (
		<Layout>
			<Container className="my-12">
				<div className="space-y-4">
					<h1>Corsi</h1>
					<p>
						La nostra offerta didattica è molto varia. Dai corsi baby ai
						corsi di perfezionamento per adulti, forniamo un&apos;ampia
						scelta per i nostri utenti. I nostri obiettivi didattici si
						dividono in 8 livelli. Clicca qua per sapere che livello hai!
					</p>
					<Button as={Link} href="#" passHref>
						Scopri il tuo livello
					</Button>
				</div>
			</Container>
			<SectionSeparator className="py-6" />
			<Container className="my-12">
				<ul className="space-y-12">
					{corsi.map((corso) => (
						<li key={corso._id} className="flex items-center gap-12">
							<Activities.Card
								title={corso.title}
								image={urlForImage(corso.cover).quality(100).url()}
								imageAlt={`Immagine del corso ${corso.title}`}
								imageBlur={false}
								frequenza={corso.frequenza.map((el) => el.name)}
							>
								<PortableText value={corso.description} />
							</Activities.Card>
						</li>
					))}
				</ul>
			</Container>
		</Layout>
	);
};

export default Corsi;
