import { ComponentProps } from "react";

import TwitterIcon from "./icons/Twitter.svg";
import FacebookIcon from "./icons/Facebook.svg";
import MessengerIcon from "./icons/Messenger.svg";
import InstagramIcon from "./icons/Instagram.svg";

type SocialIconProps = {
	social: "facebook" | "messenger" | "instagram" | "twitter";
};

const namesMap = {
	facebook: (props: ComponentProps<"svg">) => <FacebookIcon {...props} />,
	messenger: (props: ComponentProps<"svg">) => <MessengerIcon {...props} />,
	instagram: (props: ComponentProps<"svg">) => <InstagramIcon {...props} />,
	twitter: (props: ComponentProps<"svg">) => <TwitterIcon {...props} />,
};

export const SocialIcon = ({
	social,
	...props
}: SocialIconProps & ComponentProps<"svg">) => {
	return namesMap[social](props);
};
