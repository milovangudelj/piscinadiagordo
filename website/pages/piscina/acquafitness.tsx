import {
	Activities,
	Container,
	Header,
	Layout,
	Message,
	SectionSeparator,
} from "../../components";

// Assets
import imageAcquafitness from "../../public/assets/images/acquafitness.webp";

const Acquafitness = () => {
	return (
		<Layout>
			<Header
				title="Acquafitness"
				image={imageAcquafitness}
				imageAlt="Foto di un corso di circuit training"
			>
				<p>
					I corsi di acquafitness sono vari e hanno tutti una durata di 45
					minuti. E&apos; possibile pagare l&apos;ingresso singolo oppure
					acquistare la tessera da 10 ingressi valida per 3 mesi con
					frequenza libera.
				</p>
			</Header>
			<Container>
				<Message type="info" title="Nota">
					I corsi vengono svolti solo su prenotazione
				</Message>
			</Container>
			<SectionSeparator className="py-6" />
			<Activities>
				<Activities.Header title="Attività svolte">
					Nell&apos;ambito dell&apos;acquafitness vengono svolti diversi
					corsi di variabile intensità. Partecipando avrete la possibilità
					di svolgere un&apos;attività fisica dinamica seguita dai nostri
					istruttori di acquafitness: Cristiana Carazzai, Gabriella De Donà
					e Alberto Vidale.
				</Activities.Header>
				<Activities.Group>
					<Activities.Card
						title="Acquagym"
						titleTag="h3"
						image={imageAcquafitness}
						imageAlt="Foto di un esercizio di fisioterapia"
						imagePosition="80%"
						frequenza={["Ven"]}
					>
						<p>
							Esercizi eseguiti a ritmo di musica di intensità
							medio-alta, in acqua bassa e alta, a corpo libero e con
							piccoli attrezzi.
						</p>
					</Activities.Card>
				</Activities.Group>
			</Activities>
		</Layout>
	);
};

export default Acquafitness;
