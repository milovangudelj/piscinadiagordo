import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../lib/sanity";

export const CoverImage = ({
	title,
	slug,
	image: source,
}: {
	title: any;
	slug?: string;
	image: any;
}) => {
	const image = source ? (
		<div
			className={cn(
				"shadow-small relative aspect-video h-[300px] overflow-hidden rounded-lg",
				{
					"hover:shadow-medium transition-shadow duration-200": slug,
				}
			)}
		>
			<Image
				layout="fill"
				objectFit="cover"
				alt={`Immagine di copertina per ${title}`}
				title={`Immagine di copertina per ${title}`}
				src={urlForImage(source).quality(100).url()}
			/>
		</div>
	) : (
		<div className="aspect-video h-[300px] overflow-hidden rounded-lg bg-gray-300" />
	);

	return (
		<div className="sm:mx-0">
			{slug ? (
				<Link href={`/news/${slug}`} passHref>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
};
