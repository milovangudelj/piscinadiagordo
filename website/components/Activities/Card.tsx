import Image, { StaticImageData } from "next/image";
import { ElementType, ReactNode } from "react";

// Components
import { Chip } from "../Chip";

export const Card = ({
	title,
	titleTag = "h2",
	image,
	imageAlt,
	imageBlur = true,
	imagePosition,
	frequenza,
	children,
}: {
	title: string;
	titleTag?: ElementType;
	image: string | StaticImageData;
	imageAlt: string;
	imageBlur?: boolean;
	imagePosition?: string | number;
	frequenza: string[];
	children: ReactNode;
}) => {
	const Title = titleTag;
	return (
		<div className="flex">
			<div className="relative aspect-video h-[240px] overflow-hidden rounded-lg">
				<Image
					src={image}
					placeholder={imageBlur ? "blur" : "empty"}
					layout="fill"
					objectFit="cover"
					objectPosition={imagePosition}
					alt={imageAlt}
				/>
			</div>
			<div className="ml-16 flex-1">
				<Title>{title}</Title>
				<div className="flex items-center space-x-1">
					<span className="text-subtitle-mobile font-bold text-dark-le lg:text-subtitle">
						Frequenza:
					</span>
					<div className="flex space-x-1">
						{frequenza.map((item, idx) => (
							<Chip key={`${idx}_fr_chip`} size="sm">
								{item}
							</Chip>
						))}
					</div>
				</div>
				<div className="mt-4 space-y-4">{children}</div>
			</div>
		</div>
	);
};
