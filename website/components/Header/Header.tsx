import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "../Container";

export const Header = ({
	title,
	image,
	imageAlt,
	children,
}: {
	title: string;
	image: string | StaticImageData;
	imageAlt: string;
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
						alt={imageAlt}
					/>
				</div>
				<h1 className="mb-4">{title}</h1>
				<div className="text-base">{children}</div>
			</Container>
		</header>
	);
};
