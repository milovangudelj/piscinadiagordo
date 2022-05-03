import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

// Components
import { Container } from "../";

export const Header = ({
	title,
	image,
	imageAlt,
	imagePosition,
	children,
}: {
	title: string;
	image: string | StaticImageData;
	imageAlt: string;
	imagePosition?: string | number;
	children: ReactNode;
}) => {
	return (
		<header>
			<Container className="pb-12">
				<div className="relative mb-12 h-[400px]">
					<Image
						src={image}
						layout="fill"
						objectFit="cover"
						priority
						placeholder="blur"
						sizes="100vw"
						quality={100}
						objectPosition={imagePosition}
						alt={imageAlt}
					/>
				</div>
				<h1 className="mb-4">{title}</h1>
				<div className="space-y-4 text-base">{children}</div>
			</Container>
		</header>
	);
};
