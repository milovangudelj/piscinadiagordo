import { PortableText } from "@portabletext/react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button, Container, Layout, SectionSeparator } from "../../components";
import { queryCorsi } from "../../lib/queries";
import { urlForImage } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import { Corso } from "../../lib/types";

// const corsi = [
// 	{
// 		_id: "c_01",
// 		name: "Master",
// 		frequency: [{ _id: "f_01", text: "lun/gio" }],
// 		description:
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nibh lobortis et aenean auctor fames tempus donec orci. Id odio laoreet consectetur lobortis.",
// 	},
// 	{
// 		_id: "c_02",
// 		name: "Gestanti",
// 		frequency: [
// 			{ _id: "f_01", text: "mer" },
// 			{ _id: "f_02", text: "sab" },
// 		],
// 		description:
// 			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus nibh lobortis et aenean auctor fames tempus donec orci. Id odio laoreet consectetur lobortis.",
// 	},
// ];

export const getStaticProps: GetStaticProps = async () => {
	const {corsi} = await getClient().fetch(queryCorsi);
	
	return {
		props: {
			corsi
		}
	}
}

const Corsi = ({corsi}:{corsi:Corso[]}) => {
	return (
		<Layout>
			<Container className="my-8">
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
			<Container className="my-8">
				<ul className="space-y-12">
					{corsi.map((corso) => (
						<li key={corso._id} className="flex items-center gap-12">
							<div className="flex-1">
								<h2>{corso.title}</h2>
								<div className="flex items-center space-x-1">
									<span className="text-button font-bold text-dark-le">
										Frequenza:
									</span>
									<ul className="flex space-x-1">
										{corso.frequenza.map((el) => (
											<li key={el._id}>
												<span className="rounded-full bg-primary-500 px-2 py-1 text-overline font-bold uppercase tracking-button text-light-he">
													{el.name}
												</span>
											</li>
										))}
									</ul>
								</div>
								<div className="mt-4 max-w-[50ch]">
								<PortableText value={corso.description}/></div>
							</div>
							<div className="relative aspect-video h-[300px] overflow-hidden rounded-lg bg-gray-300">
								<Image src={urlForImage(corso.cover).quality(100).url()} layout="fill" objectFit="cover" alt={`Immagine del corso ${corso.title}`}/>
							</div>
						</li>
					))}
				</ul>
			</Container>
		</Layout>
	);
};

export default Corsi;
