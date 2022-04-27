import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

export const AttivitaPalazzetto = ({
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
		<>
			<div className="flex">
				<div className="relative h-[400px] w-[300px]">
					<Image
						src={image}
						layout="fill"
						objectFit="cover"
						alt={imageAlt}
					/>
				</div>
				<div className="ml-12 flex-1">
					<h3>{title}</h3>
					<div className="mt-4 space-y-4 text-base">{children}</div>
				</div>
			</div>
		</>
	);
};
