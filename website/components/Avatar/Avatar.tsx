import Image from "next/image";
import { urlForImage } from "../../lib/sanity";

export const Avatar = ({ name, picture }: { name: any; picture: any }) => {
	return (
		<div className="flex items-center">
			<div className="relative mr-4 h-12 w-12">
				<Image
					src={urlForImage(picture).height(96).width(96).fit("crop").url()}
					layout="fill"
					className="rounded-full"
					alt={name}
				/>
			</div>
			<div className="text-xl font-bold">{name}</div>
		</div>
	);
};
