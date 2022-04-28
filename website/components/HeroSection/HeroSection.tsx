import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "../Button";
import { Container } from "../Container";

// Assets
import heroImage from "../../public/assets/images/nuota-con-noi.webp";

export const HeroSection = () => {
	return (
		<div className="relative flex h-[620px] items-center justify-center">
			<div className="absolute inset-0">
				<div className="pointer-events-none relative h-full w-[150%]">
					<Image
						src={heroImage}
						objectFit="cover"
						sizes="150vw"
						priority
						layout="fill"
						alt="Foto del piano vasca della piscina"
					/>
				</div>
				<span className="absolute inset-0 right-1/2 block transform-gpu bg-white/50 backdrop-blur-xl"></span>
			</div>
			<Container className="relative h-max">
				<h1>Nuota con noi</h1>
				<p className="my-4 max-w-[42ch] text-base">
					L&apos;acqua ci è amica, non devi combatterla, condividi il suo
					spirito e lei ti aiuterà nel movimento. - A. Popov
				</p>
				<Button href="/piscina" as={Link} passHref>
					Scopri le attività
				</Button>
			</Container>
		</div>
	);
};
