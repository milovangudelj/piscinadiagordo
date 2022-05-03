import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

export const AttivitaFisio = ({
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
		<div className="flex">
			<div className="relative aspect-video h-[240px] overflow-hidden rounded-lg">
				<Image
					src={image}
					placeholder="blur"
					layout="fill"
					objectFit="cover"
					objectPosition={imagePosition}
					alt={imageAlt}
				/>
			</div>
			<div className="ml-12 flex-1">
				<h3>{title}</h3>
				<div className="mt-4 space-y-4 text-base">{children}</div>
			</div>
		</div>
	);
};
