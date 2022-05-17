import classNames from "classnames";
import { Container, Layout, SectionSeparator } from "../components";

const norms = [
	{
		_id: "nr_01",
		idx: 1,
		body: `L'utente prima di accedere ai locali della piscina dovrà\n- munirsi alla cassa del biglietto di ingresso pagando il corrispettivo prezzo stabilito;\n- munirsi di cuffia;\n- depositare le scarpe nelle apposite scarpiere e calzare le ciabatte;`,
	},
	{
		_id: "nr_02",
		idx: 2,
		body: `L'utente può quindi accedere agli spogliatoi corrispondenti al proprio sesso.`,
	},
	{
		_id: "nr_03",
		idx: 3,
		body: `E' fatto obbligo fare la doccia saponata come previsto dagli art. 2 e 3 del regolamento.`,
	},
	{
		_id: "nr_04",
		idx: 4,
		body: `Durante le attività didattiche gli utenti non possono accedere al piano vasca prima dell'inizio delle lezioni. I minori, iscritti ai corsi, devono essere accompagnati da un responsabile dall'ingresso del fabbricato piscina fino al piano vasca. Il responsabile dovrà essere presente negli spogliatoi e seguire il minore durante tutto il tempo che precede o che posticipa la lezione di nuoto. Gli allievi minori durante la lezione di nuoto sono sotto la tutela dell'istruttore. La Società di gestione ed il personale non si riterranno responsabili degli incidenti e dei relativi danni che possono colpire i minori negli spogliatoi prima o dopo le lezioni programmate, oppure sul piano vasca nel caso l'ingresso fosse avvenuto illecitamente o in orario anticipato all'ora della lezione, oppure nel caso il minore vi si fosse soffermato dopo la lezione o vi fosse rientrato.`,
	},
	{
		_id: "nr_05",
		idx: 5,
		body: `E' fatto divieto assoluto di circolare nei locali interni con le piastrelle bianche o nel locale vasca a piedi calzati. L'ingresso ai suddetti locali è subordinato all'uso delle ciabatte da usarsi solo in piscina e perfettamente pulite. Non sono ammessi indumenti diversi dal costume da bagno.`,
	},
	{
		_id: "nr_06",
		idx: 6,
		body: `E' severamente vietato usare asciugacapelli personali. Quelli in dotazione dell'impianto funzionano a monetine.`,
	},
];

const rules = [
	{
		_id: "rr_01",
		idx: 1,
		body: `Gli utenti dei servizi e i frequentatori del complesso piscina-palestra devono avere la massima cura degli impianti e delle attrezzature; eventuali danni arrecati devono essere risarciti all'Ente proprietario dell'immobile, salva applicazione delle sanzioni di legge.`,
	},
	{
		_id: "rr_02",
		idx: 2,
		body: `Prima di accedere al piano vasca è obbligatorio fare la doccia saponata.`,
	},
	{
		_id: "rr_03",
		idx: 3,
		body: `E' obbligatorio fare la doccia con il costume.`,
	},
	{
		_id: "rr_04",
		idx: 4,
		body: `L'accesso agli spogliatoi è consentito quindici minuti prima dell'orario di accesso alla vasca.`,
	},
	{
		_id: "rr_05",
		idx: 5,
		body: `E' obbligatorio l'uso della cuffia per tutti i bagnanti.`,
	},
	{
		_id: "rr_06",
		idx: 6,
		body: `E' severamente vietato circolare nei vari locali (piano-vasca, docce, spogliatoi, corridoi d'accesso) con scarpe normali, ad eccezione di ciabatte in gomma da utilizzare solamente in piscina.`,
	},
	{
		_id: "rr_07",
		idx: 7,
		body: `In piscina e nei locali annessi si può circolare solo in costume da bagno e accappatoio. L'abbigliamento deve essere perfettamente adeguato alle norme igieniche.`,
	},
	{
		_id: "rr_08",
		idx: 8,
		body: `E' vietato l'uso in vasca di sostanze varie che possa o modificare in qualsiasi modo le caratteristiche igieniche dell'acqua.`,
	},
	{
		_id: "rr_09",
		idx: 9,
		body: `L'accesso sarà impedito a coloro i quali presentano segni di malattie cutanee, lesioni o ferite aperte o che, comunque ad insindacabile giudizio della Direzione o del personale di servizio, non si trovino in soddisfacenti condizioni igienico-sanitarie.`,
	},
	{
		_id: "rr_10",
		idx: 10,
		body: `Sarà immediatamente allontanato dagli impianti e tenuto al risarcimento dell'eventuale danno, fatto salva l'azione penale ove prevista dalla legge, colui che in qualsiasi modo lorda l'acqua di balneazione, gli spogliatoi, le docce e i servizi igienici dell'impianto e che si trova in stato di ubriachezza. Questi utenti non hanno diritto al rimborso del biglietto.`,
	},
	{
		_id: "rr_11",
		idx: 11,
		body: `E' vietato agli utenti fare uso di maschere, pinne o altre attrezzature che possono in qualsiasi modo arrecare danno ad altri frequentatori. L'utilizzo di tale attrezzatura può essere autorizzato dalla Direzione impianti su esplicita richiesta d'uso.`,
	},
	{
		_id: "rr_12",
		idx: 12,
		body: `Sono proibite le spinte, i salti dal bordo vasca, i tuffi e le apnee se non autorizzate da personale addetto alla sorveglianza o dagli istruttori durante l'attività didattica.`,
	},
	{
		_id: "rr_13",
		idx: 13,
		body: `I ragazzi/e di età inferiore ai 10 anni dovranno essere accompagnati da persone adulte che ne assumano la responsabilità a tutti gli effetti.`,
	},
	{
		_id: "rr_14",
		idx: 14,
		body: `L'accesso al pubblico può essere limitato in caso di sovraffollamento della vasca per ragioni di sicurezza.`,
	},
	{
		_id: "rr_15",
		idx: 15,
		body: `il pubblico è tenuto a rispettare rigorosamente l'orario di apertura e di chiusura dell'impianto.`,
	},
	{
		_id: "rr_16",
		idx: 16,
		body: `E' severamente vietato impartire lezioni di nuoto o di qualsiasi altra attività da parte di persone non autorizzate dalla Direzione.`,
	},
	{
		_id: "rr_17",
		idx: 17,
		body: `La Direzione non risponde delle cose dimenticate all'interno dell'impianto.`,
	},
	{
		_id: "rr_18",
		idx: 18,
		body: `La Direzione declina ogni responsabilità per incidenti o danni alle persone verificatevi negli impianti o aree annesse, provocati dall'imprudenza degli utenti stessi.`,
	},
	{
		_id: "rr_19",
		idx: 19,
		body: `La Direzione non risponde di eventuali oggetti o cose trafugate o smarrite.`,
	},
	{
		_id: "rr_20",
		idx: 20,
		body: `E' severamente proibito introdurre animali di qualsiasi specie nel complesso sportivo.`,
	},
	{
		_id: "rr_21",
		idx: 21,
		body: `E' severamente vietato fotografare o filmare all'interno del complesso piscina. Eventuali richieste dovranno essere autorizzate dalla direzione e motivate per esigenze di carattere didattico-sportive.`,
	},
	{
		_id: "rr_22",
		idx: 22,
		body: `E' fatto obbligo rispettare le norme d'uso della piscina (allegato 1) che sono parti integranti del presente regolamento.`,
	},
	{
		_id: "rr_23",
		idx: 23,
		body: `E' fatto obbligo del personale di servizio far rispettare il presente regolamento e le norme d'uso della piscina previste nell'allegato 1.`,
	},
	{
		_id: "rr_24",
		idx: 24,
		body: `Per quanto non previsto dal presente regolamento, sarà cura della Direzione impartire direttive specifiche.`,
	},
];

const Regolamento = () => {
	return (
		<Layout>
			<Container className="my-12">
				<h1 className="mb-4">Norme d'uso della Piscina di Agordo</h1>
				<p className="mb-12">
					Per poter accedere all astruttura è necessarioattenersi ad alcune
					semplici norme di comportamento che fanno si che
					l&apos;esperienza all&apos;interno sia il più possibile piacevole
					per gli utenti e ile personale della piscina.
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
				<h2 className="mb-4">Regolamento della Piscina di Agordo</h2>
				<p className="mb-12">
					A seguito il regolamento completo della Piscina Comprensoriale
					Agordina.
				</p>
				<ol className="space-y-6">
					{rules.map((item) => (
						<li
							key={item._id}
							className={classNames("flex space-x-6 py-2 px-4", {
								"bg-primary-50": item.idx % 2 !== 0,
							})}
						>
							<span className="inline-block h-min w-16 flex-shrink-0 text-subtitle-mobile font-bold text-primary-900 lg:text-subtitle">
								Art.{item.idx}
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
