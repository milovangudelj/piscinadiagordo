import Image from "next/image";

// Components
import { Container } from "../Container";

const sposnors = [
	{
		_id: "sp_1",
		name: "Sponsor 1",
		image: "/assets/images/sponsors/sanity.svg",
	},
	{
		_id: "sp_2",
		name: "Sponsor 2",
		image: "/assets/images/sponsors/sanity.svg",
	},
	{
		_id: "sp_3",
		name: "Sponsor 3",
		image: "/assets/images/sponsors/sanity.svg",
	},
	{
		_id: "sp_4",
		name: "Sponsor 4",
		image: "/assets/images/sponsors/sanity.svg",
	},
];

export const SponsorSection = () => {
	return (
		<div className="py-12">
			<Container>
				<span className="mb-6 inline-block font-montserrat text-subtitle font-medium">
					I nostri partner
				</span>
				<ol className="flex gap-8">
					{sposnors.map((sponsor) => (
						<li key={sponsor._id}>
							<div className="flex aspect-[3/2] w-[150px] items-center justify-center rounded-lg bg-gray-300">
								<Image
									src={sponsor.image}
									layout="fixed"
									width={105}
									height={22}
									objectFit="cover"
									alt={`Immagine del logo di ${sponsor.name}`}
								/>
							</div>
							{/* <span className="mt-2">{sponsor.name}</span> */}
						</li>
					))}
				</ol>
			</Container>
		</div>
	);
};
