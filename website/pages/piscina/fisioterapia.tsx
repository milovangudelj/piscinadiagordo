import Image from "next/image";
import {
	Activities,
	AttivitaFisio,
	Container,
	Header,
	Layout,
	SectionSeparator,
} from "../../components";

// Assets
import imageFisio from "../../public/assets/images/idrokinesiterapia.webp";
import imageRobertoA from "../../public/assets/images/roberto-agnolet.webp";

const Fisioterapia = () => {
	return (
		<Layout>
			<Header
				title="Fisioterapia"
				image={imageFisio}
				imageAlt="Foto di un esercizio di fisioterapia"
			>
				La fisioterapia (dal greco Φυσιο = naturale e θεραπεία = terapia) è
				una branca delle professioni sanitarie che si occupa della
				prevenzione, cura e riabilitazione dei pazienti affetti da patologie
				o disfunzioni congenite o acquisite in ambito muscoloscheletrico,
				neurologico e viscerale attraverso molteplici interventi
				terapeutici, quali: terapia fisica, terapia manuale/manipolativa,
				massoterapia, terapia posturale, chinesiterapia e altre.
			</Header>
			<SectionSeparator className="py-6" />
			<Activities>
				<Activities.Header title="Le nostre attività">
					Il nostro Team super dinamico organizza varie attività sportive
					di gruppo per adulti e non solo. Scopri con noi quali.
				</Activities.Header>
				<Activities.Group>
					<AttivitaFisio
						title="Idrokinesiterapia"
						image={imageFisio}
						imageAlt="Foto di un esercizio di fisioterapia"
						imagePosition="80%"
					>
						<p>
							L&apos;Idrokinesiterapia è una terapia basata su tecniche
							di trattamento eseguite in acqua riscaldata a fini
							terapeutici e riabilitativi.
						</p>
						<p>
							E' utile nel recupero post traumatico e chirurgico, in caso
							di dolori articolari e in casi di lesioni o malattie
							neurologiche.
						</p>
						<p>
							Adatta anche per chi ha poca confidenza con l&apos;acqua:
							l&apos;ambiente è reso piacevole e sicuro adattando
							l&apos;altezza dell&apos;acqua ed usando appositi
							galleggianti.
						</p>
						<p>
							All&apos;inizio di ogni percorso riabilitativo in acqua
							viene effettuata una valutazione a secco per determinare le
							necessità del singolo paziente.
						</p>
					</AttivitaFisio>
				</Activities.Group>
			</Activities>
			<SectionSeparator className="py-6" />
			<Container className="my-12">
				<h2>Fisioterapisti dedicati</h2>
				<ul className="mt-12 space-y-12">
					<li className="flex-1">
						<figure className="flex items-start gap-8">
							<img
								src="https://s3-alpha-sig.figma.com/img/88f6/c5b9/dc27875415d0dc5dc1c7b8ce49cd9405?Expires=1652659200&Signature=Gq7Zzj2~GKEnK08DTEj6ySPUASkzULbWyZK008ViYjuaB853K1UJR7-x51HQHBwuqqFLQT8ZORihoaWIzs~EDJFRu4r1wOIQ9ZGj~zKX2I0DaUUaM~Zqy9d5o8CrnNo6-HkwA1UzUg-ugAzDjuYmoVshPs-BSpHPaj4E9xnK4686eG4gq-QcOTqSwr2DmXEGwVSx~CGxe1kJdDKLDAmHWKqbWTqzyY2kRq04xlV5RGmVxLnSfVPJqXXPCzuoyzfnqeNfkrAqSt8k5WuToFXZPnFp7pARsF~I9AJzhgHmYjIAxhuGzmVbmkHewQ1pNB33XMOV6oUVIxoCB6MgNs4A9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
								alt="Roberto Agnolet"
								title="Roberto Agnolet"
								className="aspect-[3/4] w-[180px] rounded-lg object-cover"
							/>
							<div className="flex flex-col-reverse gap-4">
								<blockquote className="text-dark-me">
									<p>
										Sono Fisioterapista e dottore Magistrale in
										Scienze Motorie per la Prevenzione e la Salute, mi
										occupo della riabilitazione e del recupero
										funzionale in ambito muscolo-scheletrico,
										neurologico e geriatrico, con particolare
										attenzione al mondo sportivo. Mi piace integrare
										il lavoro che svolgo proponendo l&apos;ambiente
										acquatico (idrochinesiterapia) fondamentale e
										decisivo per il paziente nella fase riabilitativa
										post-acuta e nella gestione globale del dolore
									</p>
								</blockquote>
								<div>
									<div className="font-montserrat text-subtitle font-medium">
										Roberto Agnolet
									</div>
									<div className="text-primary-500">
										Fisioterapista, Poliambulatorio Agordino
									</div>
								</div>
							</div>
						</figure>
					</li>
				</ul>
			</Container>
		</Layout>
	);
};

export default Fisioterapia;
