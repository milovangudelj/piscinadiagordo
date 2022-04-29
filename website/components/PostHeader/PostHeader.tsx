import { useRouter } from "next/router";
import Image from "next/image";
import { MailIcon, ShareIcon } from "@heroicons/react/solid";
import { format, parseISO } from "date-fns";

import { PostTitle, SocialIcon } from "../";

import { urlForImage } from "../../lib/sanity";

export const PostHeader = ({
	title,
	excerpt,
	coverImage,
	date,
}: {
	title: any;
	excerpt: string;
	coverImage: any;
	date: string;
}) => {
	const router = useRouter();
	const url = "https://piscina.ilikemartians.com" + router.asPath;
	const dateVal = parseISO(date);

	const copy = () => {
		navigator.clipboard.writeText(url);
	};

	return (
		<>
			<div className="mx-auto max-w-prose pt-12 text-base">
				<PostTitle>{title}</PostTitle>
				<p className="font-montserrat text-subtitle font-medium text-dark-me">
					Un&apos;aggiunta importante all&apos;attrezzatura della piscina
				</p>
				<div className="mt-6 flex items-center justify-between">
					<div className="flex items-center gap-[10px]">
						<div className="h-[28px] w-[28px] rounded-full bg-gray-300"></div>
						<span className="text-caption text-dark-he">
							Chiara Fontanive
						</span>
						<span className="text-caption text-dark-me">
							<time dateTime={date}>
								{format(dateVal, "d LLL, yyyy")}
							</time>{" "}
							• 2 min.
						</span>
					</div>
					<div className="flex space-x-4">
						<ShareIcon className="h-5 w-5 text-dark-he" onClick={copy} />
						<a
							href={`mailto:?subject=${title}&body=${excerpt}%0D%0A%0D%0A${url}`}
						>
							<MailIcon className="h-5 w-5 text-dark-he" />
						</a>
						<a
							href={`https://twitter.com/intent/tweet?text=${excerpt}&url=${url}`}
						>
							<SocialIcon
								social="twitter"
								className="h-5 w-5 text-dark-he"
							/>
						</a>
						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
						>
							<SocialIcon
								social="facebook"
								className="h-5 w-5 text-dark-he"
							/>
						</a>
					</div>
				</div>
			</div>
			<div className="relative my-10 h-[448px] overflow-hidden rounded-lg">
				<Image
					layout="fill"
					objectFit="cover"
					alt={`Immagine di copertina per ${title}`}
					title={title}
					src={urlForImage(coverImage).quality(100).url()}
				/>
			</div>
		</>
	);
};
