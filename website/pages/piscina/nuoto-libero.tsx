import Link from "next/link";

import {
	Button,
	Container,
	Header,
	Layout,
	SocialIcon,
} from "../../components";

import imageNuotoL from "../../public/assets/images/nuoto-libero.webp";

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
				<p className="text-subtitle font-bold">
					Vuoi prenotarti per il nuoto libero?
				</p>
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
			</Header>
			<Container>Nuoto libero</Container>
		</Layout>
	);
};

export default NuotoLibero;
