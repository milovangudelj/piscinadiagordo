// Components
import {
	Activities,
	AttivitaPalazzetto,
	Container,
	Header,
	Layout,
	SectionSeparator,
} from "../components";

// Assets
import imgPalazzetto from "../public/assets/images/palazzetto-2.webp";
import imgAerobica from "../public/assets/images/corso-aerobica-latina-2021.webp";
import imgPresciistica from "../public/assets/images/corso-presciistica-2021.webp";
import Image from "next/image";

const Palazzetto = () => {
	return (
		<Layout>
			<Header
				title="Palazzetto"
				image={imgPalazzetto}
				imageAlt="Immagine del palazzetto visto dall'esterno"
				imagePosition="50% 24%"
			>
				La società sportiva Attivamente Agordino gestisce, oltre alla
				piscina, anche l&apos;uso del palazzetto. L&apos;impianto risale ai
				primi anni &apos;80 ed è dotato di tribune con capienza di circa 200
				ospiti. La palestra si presta per lo svolgimento di numerose
				discipline tra cui calcetto, pallavolo, basket, pattinaggio in
				linea, tennis e numerose altre attività di gruppo. Il palazzetto
				viene attualmente usufruito anche dal polo scolastico di Agordo per
				le attività di educazione fisica. E&apos; fornito di spogliatoi,
				docce e phon disponibili a tutti, nel rispetto delle normative anti
				Covid.
			</Header>
			<SectionSeparator className="py-6" />
			<Activities>
				<Activities.Header title="Le nostre attività">
					Il nostro Team super dinamico organizza varie attività sportive
					di gruppo per adulti e non solo. Scopri con noi quali.
				</Activities.Header>
				<Activities.Group>
					<AttivitaPalazzetto
						title="Aerobica latina"
						image={imgAerobica}
						imageAlt="Foto di un corso di aerobica latina"
					>
						<p>
							Tutti i giovedì dalle 20 alle 21, un&apos;ora di fitness a
							ritmo di musica. Fatti travolgere dal dinamismo delle danze
							latine.
						</p>
						<p>
							Info e iscrizioni presso la segreteria della piscina al
							numero 0437 62406
						</p>
					</AttivitaPalazzetto>
					<AttivitaPalazzetto
						title="Ginnastica presciistica"
						image={imgPresciistica}
						imageAlt="Foto del volantino del corso"
					>
						<p>
							Tutti i martedì dalle 19 alle 20, con un nostro allenatore
							preparato e formato. Attività valida dal 22 settembre al 15
							dicembre, cosa stai aspettando?
						</p>
						<p>
							Info e iscrizioni presso la segreteria della piscina al
							numero 0437 62406
						</p>
					</AttivitaPalazzetto>
				</Activities.Group>
			</Activities>
			<SectionSeparator className="py-6" />
			<Container className="my-12">
				<h2>Noleggio a privati</h2>
				<div className="mt-4 space-y-4 text-base">
					<p>
						Stai cercando uno spazio dove trovarti con gli amici per
						allenarti? Il Palazzetto dello Sport di Agordo è il posto
						adatto a te, già fornito con tutte le attrezzature di cui
						avrai bisogno (rete da pallavolo, porte da calcetto e canestri
						da basket).
					</p>
					<p>Tariffa oraria: 30€</p>
					<p>
						Contatta la nostra segreteria per maggiori informazioni al
						numero 0437 62406 o mandaci una mail.
					</p>
				</div>
			</Container>
			<SectionSeparator className="py-6" />
			<Container className="my-12">
				<h2>Noleggio a società sportive</h2>
				<div className="mt-4 space-y-4 text-base">
					<p>
						Sei una società sportiva alla ricerca di uno spazio utile dove
						allenare la tua squadra o dare il via ad una nuova attività di
						gruppo? Il palazzetto di Agordo è il posto giusto per voi,
						un&apos;ampio spazio disponibile per ogni attività.
					</p>
					<p>Tariffa oraria: 20€</p>
					<p>
						Contatta la nostra segreteria per maggiori informazioni al
						numero 0437 62406 o mandaci una mail.
					</p>
				</div>
			</Container>
		</Layout>
	);
};

export default Palazzetto;
