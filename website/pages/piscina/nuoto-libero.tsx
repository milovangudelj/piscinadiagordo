import Image from "next/image";
import Link from "next/link";

// Components
import {
	Button,
	Container,
	Header,
	Layout,
	Message,
	SectionSeparator,
	SocialIcon,
	PricingTable,
	OpeningHsTable,
} from "../../components";

// Assets
import imageNuotoL from "../../public/assets/images/nuoto-libero.webp";
import imageSolarium from "../../public/assets/images/solarium.webp";

const orari = [
	{ day: 0, label: "Lunedì", attrezzi: true, ore: ["09:30 - 21:20"] },
	{ day: 1, label: "Martedì", ore: ["09:30 - 21:20"] },
	{ day: 2, label: "Mercoledì", attrezzi: true, ore: ["09:30 - 21:20"] },
	{ day: 3, label: "Giovedì", ore: ["09:30 - 15:30", "19:00 - 21:00"] },
	{ day: 4, label: "Venerdì", ore: ["09:30 - 21:20"] },
	{ day: 5, label: "Sabato", attrezzi: true, ore: ["09:30 - 21:20"] },
	{ day: 6, label: "Domenica", attrezzi: true, ore: ["09:30 - 21:20"] },
];

const ingressi = [
	{ label: "Adulto", value: "8,00€" },
	{ label: "Bambino", details: "4 - 14 anni", value: "6,00€" },
	{ label: "Bambino", details: "0 - 3 anni", value: "Gratuito" },
	{ label: "Famiglia", details: "2 adulti + 2 bambini", value: "25,00€" },
];

const abbonamenti = [
	{ label: "Adulto", details: "10 ingressi", value: "65,00€" },
	{ label: "Adulto", details: "30 ingressi", value: "160,00€" },
	{ label: "Bambino", details: "10 ingressi", value: "48,00€" },
	{ label: "Bambino", details: "30 ingressi", value: "110,00€" },
];

const solarium = [{ label: "Lettino + ombrellone", value: "3,00€" }];

const NuotoLibero = () => {
	return (
		<Layout>
			<Header
				title="Nuoto libero"
				image={imageNuotoL}
				imageAlt="Immagine del piano vasca della piscina"
				imagePosition="50% 20%"
			>
				<p>
					La nostra piscina è fornita di scivoli, tappetini e giochi vari
					disponibili per i nostri utenti per momenti di divertimento fra
					amici o in famiglia. Il permesso dell&apos;uso di questi è
					subordinato alla decisione dell&apos;assistente di vasca, che
					valuterà la disponibilità e la sicurezza degli altri nuotatori
					già presenti in vasca.
				</p>
			</Header>
			<Container>
				<Message type="warning" title="Importante">
					Per poter accedere alla struttura è necessario aver letto con
					attenzione il regolamento e rispettarne le norme. Per quanto
					riguarda le nuove norme anti-Covid, si consiglia di leggere il
					regolamento e attenersi ad alcune semplici regole per assicurare
					la sicurezza propria e del resto dell&apos;utenza. Vi ringraziamo
					per la comprensione e confidiamo nella vostra collaborazione.
				</Message>
			</Container>
			<SectionSeparator className="py-6" />
			<Container className="my-12 space-y-6">
				<h2>Prenotazioni</h2>
				<p>
					Chiama direttamente la nostra segreteria al numero 0437 62406.
					Trovi gli orari della segreteria nella pagina dei contatti.
					Oppure prenota tramite il nostro numero Whatsapp cliccando sul
					pulsante qua sotto.
				</p>
				<Button
					as={Link}
					href="https://wa.me/393792792351/?text=Salve%2C%20vorrei%20prenotare%20il%20nuoto%20libero%20alle%20ore%3A%20"
					passHref
					startIcon={<SocialIcon social="whatsapp" className="h-5 w-5" />}
				>
					Prenota il nuoto libero
				</Button>
			</Container>
			<SectionSeparator className="py-6" />
			<Container className="my-12 space-y-6">
				<h2>Orari</h2>
				<p>
					Gli orari di apertura della piscina per il nuoto libero possono
					subire variazioni in base all&apos;organizzazione dei corsi di
					nuoto svolti durante una particlare giornata. Vi consigliamo di
					controllare regolarmente questa pagina per tenervi aggiornati su
					eventuali modifiche.
				</p>
				<div className="py-4 px-12">
					<OpeningHsTable days={orari} className="w-full" />
				</div>
				<span className="inline-block text-base text-dark-me">
					* C'è la possibilità di avere la ciclette e/o il tapis-roulant in
					acqua.
				</span>
			</Container>
			<SectionSeparator className="py-6" />
			<Container className="my-12 space-y-6">
				<h2>Tariffe</h2>
				<p>
					Le tariffe dell&apos;accesso al nuoto libero possono subire
					variazioni. Vi consigliamo di controllare regolarmente questa
					pagina per tenervi aggiornati su eventuali modifiche.
				</p>
				<div className="flex gap-6 px-12 py-6">
					<PricingTable
						title="Ingresso singolo"
						prices={ingressi}
						className="flex-1"
					/>
					<PricingTable
						title="Abbonamento"
						prices={abbonamenti}
						className="flex-1"
					/>
				</div>
				<p>
					La Piscina di Agordo offre anche la possibilità di noleggiare una
					o più corsie a seconda della disponibilità oraria del nuoto
					libero. Per maggiori informazioni e tariffe, chiama la nostra
					segreteria al numero 0437 62406.
				</p>
			</Container>
			<SectionSeparator className="py-6" />
			<Container className="my-12 space-y-6">
				<h2>Solarium estivo</h2>
				<div className="flex gap-12">
					<div className="flex-1 space-y-6">
						<p>
							La piscina di Agordo è provvista anche di un ampio spazio
							relax immerso nel verde fornito di sdraio e ombrelloni per
							i vostri momenti di benessere all&apos;aria aperta. Lo
							spazio è disponibile durante il periodo estivo negli orari
							del nuoto libero.
						</p>
						<div className="py-4 px-12">
							<PricingTable
								title="Solarium"
								prices={solarium}
								className="flex-1"
							/>
						</div>
						<p>
							Contattaci al numero 0437 62406 per maggiori informazioni.
						</p>
					</div>
					<div className="relative aspect-video w-[620px] overflow-hidden rounded-lg">
						<Image
							src={imageSolarium}
							layout="fill"
							objectFit="cover"
							alt="Foto del solarium in una giornata di sole"
						/>
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default NuotoLibero;
