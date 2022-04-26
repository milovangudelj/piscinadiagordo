import Link from "next/link";

// Components
import {
	CollaboratorsList,
	Header,
	Layout,
	SectionSeparator,
	TeamMembersList,
} from "../components";

// Types
import { Person } from "../lib/types";

// Lib
import { queryCollaboratori, queryDirettivo } from "../lib/queries";
import { getClient } from "../lib/sanity.server";

// Assets
import imageSunsetPool from "../public/assets/images/chi-siamo.webp";

export const getStaticProps = async () => {
	const { direttivo } = await getClient().fetch(queryDirettivo);
	const { collaboratori } = await getClient().fetch(queryCollaboratori);

	return {
		props: {
			direttivo,
			collaboratori,
		},
	};
};

const Team = ({
	direttivo,
	collaboratori,
}: {
	direttivo: Person[];
	collaboratori: Person[];
}) => {
	return (
		<Layout>
			<Header
				title="Chi siamo"
				image={imageSunsetPool}
				imageAlt="Foto della piscina al tramonto"
			>
				<p>
					La società sportiva Attivamente Agordino ha preso in gestione la
					piscina e palestra comprensoriale di Agordo ad agosto 2019,
					decidendo così di intraprendere una nuova sfida professionale e
					personale. La nostra è una realtà semplice e familiare, punto di
					incontro e di crescita per tutti i nostri ospiti. Siamo nuotatori
					per passione, e ci impegniamo giorno dopo giorno per rendere la
					piscina un luogo di benessere per il corpo e la mente.
				</p>
			</Header>
			<SectionSeparator className="py-6" />
			<TeamMembersList people={direttivo} />
			<SectionSeparator className="py-6" />
			<CollaboratorsList people={collaboratori} />
		</Layout>
	);
};

export default Team;
