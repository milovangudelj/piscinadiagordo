import Image from "next/image";

// Components
import { Container } from "../Container";

// Types
import { Person } from "../../lib/types";

// Lib
import { urlForImage } from "../../lib/sanity";

export const TeamMembersList = ({ people }: { people: Person[] }) => {
	return (
		<Container className="py-12">
			<h2 className="mb-12">Il team</h2>
			<ol className="grid grid-cols-[repeat(4,_200px)] justify-between gap-y-6">
				{people.map((person) => (
					<li
						key={person._id}
						className="flex w-max flex-col items-center space-y-3 pb-3"
					>
						<div className="relative h-[250px] w-[200px] overflow-hidden rounded-lg">
							<Image
								src={urlForImage(person.image).quality(100).url()}
								layout="fill"
								objectFit="cover"
								alt={person.image.alt}
							/>
						</div>
						<span className="text-base">
							{person.name} {person.surname}
						</span>
						<span className="text-caption text-dark-me">
							{person.role}
						</span>
					</li>
				))}
			</ol>
		</Container>
	);
};
