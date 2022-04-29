import Link from "next/link";
import { Textfit } from "react-textfit";
import { Button, Container, Layout } from "../components";

type Codes = { 404: number; 500: number };

type Message<T> = {
	[Property in keyof T]: { heading: string; paragraph: string };
};

const messages: Message<Codes> = {
	404: {
		heading: "Hmmm, qualcosa è andato storto...",
		paragraph:
			"La pagina che stai cercando non esiste oppure è stata spostata. Contorlla che l'indirizzo sia corretto e riprova.",
	},
	500: {
		heading: "Hmmm, qualcosa è andato storto...",
		paragraph:
			"C'è stato un'errore interno al server. Ricarica la pagina e se non funziona riprova più tardi.",
	},
};

const ErrorPage = ({ statusCode = 404 }: { statusCode?: keyof Codes }) => {
	return (
		<Layout main="screen">
			<span className="pointer-events-none absolute -z-10 flex h-full w-screen items-center font-montserrat text-h1 font-semibold text-primary-50">
				<Textfit className="w-full" mode="single" max={9999}>
					{statusCode}
				</Textfit>
			</span>
			<Container className="flex h-full flex-col justify-center">
				<h1 className="max-w-[17ch]">{messages[statusCode].heading}</h1>
				<p className="my-4 max-w-[44ch] text-base">
					{messages[statusCode].paragraph}
				</p>
				<Button as={Link} href="/" passHref>
					Torna alla home
				</Button>
			</Container>
		</Layout>
	);
};

export default ErrorPage;
