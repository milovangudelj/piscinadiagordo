import cn from "classnames";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../Button";
import { Container } from "../Container";

export const MarketingBlock = ({
	title,
	children,
	ctaText,
	ctaLink,
	image,
	imageAlt,
	side = "left",
}: {
	title: string;
	children: ReactNode;
	ctaText: string;
	ctaLink: string;
	image: string | StaticImageData;
	imageAlt: string;
	side?: "right" | "left";
}) => {
	return (
		<Container>
			<div className="flex items-center justify-between gap-12">
				<div
					className={cn(
						"flex-1",
						{ "order-1": side === "left" },
						{ "order-2": side === "right" }
					)}
				>
					<h2 className="mb-6">{title}</h2>
					<div className="w-full max-w-[43ch] text-base">{children}</div>
					<div className="mt-6">
						<Button as={Link} passHref href={ctaLink}>
							{ctaText}
						</Button>
					</div>
				</div>
				<div
					className={cn(
						`relative aspect-[9/5] w-[720px] overflow-hidden rounded-lg`,
						{ "order-1": side === "right" },
						{ "order-2": side === "left" }
					)}
				>
					<Image
						src={image}
						layout="fill"
						objectFit="cover"
						alt={imageAlt}
					/>
				</div>
			</div>
		</Container>
	);
};
