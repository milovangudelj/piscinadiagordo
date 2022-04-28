import Image from "next/image";
import { sponsorQuery } from "../../lib/queries";
import { urlForImage } from "../../lib/sanity";
import { sanityClient } from "../../lib/sanity.server";

// Components
import { Container } from "../Container";

export const SponsorSection = ({ sponsors }: { sponsors: any[] }) => {
	return (
		<div className="py-12">
			<Container>
				<span className="mb-6 inline-block font-montserrat text-subtitle font-medium">
					I nostri partner
				</span>
				<ol className="flex gap-8">
					{sponsors.map((sponsor) => (
						<li key={sponsor._id}>
							<div className="flex aspect-[3/2] w-[150px] items-center justify-center rounded-lg">
								<Image
									src={urlForImage(sponsor.logo)
										.height(22)
										.width(105)
										.url()}
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