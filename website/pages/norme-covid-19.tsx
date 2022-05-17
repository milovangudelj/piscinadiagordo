import classNames from "classnames";
import { Container, Layout, SectionSeparator } from "../components";

const norms = [
	{
		_id: "nc_01",
		idx: 1,
		body: `È obbligatorio indossare la mascherina;`,
	},
	{
		_id: "nc_02",
		idx: 2,
		body: `È obbligatorio l'utilizzo dei guanti o del gel igienizzante;`,
	},
	{
		_id: "nc_03",
		idx: 3,
		body: `Non potranno accedere utenti privi di dispositivi di protezione personali, né chiunque presenti sintomatologia influenzale;`,
	},
	{
		_id: "nc_04",
		idx: 4,
		body: `Dovranno essere rispettate rigorosamente le nuove indicazioni di regolamento dell'impianto e la cartellonistica, qualora non accadesse il personale inviterà l'utente a lasciare la struttura;`,
	},
	{
		_id: "nc_05",
		idx: 5,
		body: `Non sarà consentito sostare nella hall o negli spazi comuni;`,
	},
	{
		_id: "nc_06",
		idx: 6,
		body: `È consigliata la prenotazione del giorno e dell'orario di accesso;`,
	},
	{
		_id: "nc_07",
		idx: 7,
		body: `Sarà possibile accedere senza prenotazione, ma l'accesso è condizionato alla capienza delle disponibiità;`,
	},
	{
		_id: "nc_08",
		idx: 8,
		body: `Gli ambienti sono limitati al numero di utenti concessi dalla regolamentazione "Linee guida della regione veneto" attualmente in vigore;`,
	},
	{
		_id: "nc_09",
		idx: 9,
		body: `Gli utenti già iscritti potranno accedere regolarmente alla struttura, previo passaggio in segreteria;`,
	},
	{
		_id: "nc_10",
		idx: 10,
		body: `Gli utenti non iscritti dovranno procedere alla registrazione prima dell'acceso all'impianto;`,
	},
	{
		_id: "nc_11",
		idx: 11,
		body: `Gli indumenti non potranno restare appesi negli spogliatoi, sarà necessario riporli (vestiario e scarpe) nella propra borsa sportiva che verrà riposta negli appositi armadietti;`,
	},
	{
		_id: "nc_12",
		idx: 12,
		body: `Gli armadietti saranno liberati al termine di ogni turno e igienizzati secondo le necessità. A fine giornata tutto ciò che viene rinvenuto sarà cestinato;`,
	},
	{
		_id: "nc_13",
		idx: 13,
		body: `La mascherina sarà indossata in ogni ambiente dell'impianto con esclusione per l'attività natatoria;`,
	},
	{
		_id: "nc_14",
		idx: 14,
		body: `Il personale vigilerà negli spogliatoi e nella sala, avendo diritto all'accesso in ogni momento e ogni area dell'impianto, provvedendo al monitoraggio e alla dissuasione di ogni eventuale situazione di aggregazione o mancato distanziamento sociale;`,
	},
	{
		_id: "nc_15",
		idx: 15,
		body: `È obbligatorio seguire i percorsi di accesso;`,
	},
	{
		_id: "nc_16",
		idx: 16,
		body: `È consigliato raggiungere l'impianto già con il costume indossato o l'abbigliamento ginnico indossato;`,
	},
	{
		_id: "nc_17",
		idx: 17,
		body: `È obbligatoria la doccia saponata prima dell'accesso in vasca;`,
	},
	{
		_id: "nc_18",
		idx: 18,
		body: `A termine dell'attività si consiglia uno sciacquo rapido e si raccomanda celerità nello sgombero dello spogliatoio.`,
	},
];

const Regolamento = () => {
	return (
		<Layout>
			<Container className="my-12">
				<h1 className="mb-4">Norme COVID-19</h1>
				<p className="mb-12">
					Per poter accedere alla struttura è necessario aver letto con
					attenzione il presente documento e rispettarne le norme. Ci
					troviamo ancora in una situazione precaria per quanto riguarda la
					pandemia causata dal Coronavirus, pertanto bisogna attenersi ad
					alcune semplici regole per assicurare la sicurezza propria e del
					resto dell&apos;utenza. Vi ringraziamo per la comprensione e
					confidiamo nella vostra collaborazione.
				</p>
				<ol className="space-y-6">
					{norms.map((item) => (
						<li
							key={item._id}
							className={classNames("flex space-x-6 py-2 px-4", {
								"bg-primary-50": item.idx % 2 !== 0,
							})}
						>
							<span className="inline-block h-min w-16 flex-shrink-0 font-montserrat text-h2-mobile font-semibold text-primary-900 lg:text-h2">
								{item.idx}.
							</span>
							<p className="whitespace-pre-wrap">{item.body}</p>
						</li>
					))}
				</ol>
			</Container>
			<SectionSeparator className="py-6" />
			<Container className="my-12">
				<p className="whitespace-pre-wrap text-base-xs text-dark-me">{`ATTIVITÀ DI SEGRETERIA DA LUNEDÌ A VENERDÌ:\n16:00–19:00\n\nAL PRIMO ACCESSO SARÀ NECESSARIO PER L’UTENTE RIVOLGERSI ALLA SEGRETERIA PER AGGIORNARE LA PROROGA DEL PROPRIO ABBONAMENTO AVVENUTO A CAUSA DELL’EMERGENZA COVID-19\n\nLA GESTIONE DELLE QUOTE SOSPESE PER L’ATTIVITÀ DIDATTICA NON GODUTA NEL MESE DI MARZO, SARÀ GESTITA RIVOLGENDOSI ALLA SEGRETERIA CHE VALUTERÀ SINGOLARMENTE OGNI NECESSITÀ.\n\nGESTIONE DEL CASO SINTOMATICO: IN RECEPIMENTO ALLA NORMATIVA IN ATTO, QUALORA L’UTENTE SIA COLTO DA SINTOMATOLOGIA SARÀ IMMEDIATAMENTE ISOLATO E SARÀ ALLERTATO COME DA PROTOCOLLO IL NUMERO DI EMERGENZA SANITARIO.`}</p>
			</Container>
		</Layout>
	);
};

export default Regolamento;
