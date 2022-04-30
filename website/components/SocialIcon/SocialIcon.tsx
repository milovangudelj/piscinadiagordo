import { ComponentProps } from "react";

import FacebookIcon from "./icons/Facebook.svg";
import MessengerIcon from "./icons/Messenger.svg";
import InstagramIcon from "./icons/Instagram.svg";
import TwitterIcon from "./icons/Twitter.svg";
import WhatsappIcon from "./icons/Whatsapp.svg";

type SocialIconProps = {
	social: "facebook" | "messenger" | "instagram" | "twitter" | "whatsapp";
};

const namesMap = (props: ComponentProps<"svg">) => {
	return {
		facebook: <FacebookIcon {...props} />,
		messenger: <MessengerIcon {...props} />,
		instagram: <InstagramIcon {...props} />,
		twitter: <TwitterIcon {...props} />,
		whatsapp: <WhatsappIcon {...props} />,
	};
};

export const SocialIcon = ({
	social,
	...props
}: SocialIconProps & ComponentProps<"svg">) => {
	return namesMap(props)[social];
};
