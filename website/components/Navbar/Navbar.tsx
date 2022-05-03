import Link from "next/link";
import { useRouter } from "next/router";
import { PhoneIcon, PlusSmIcon } from "@heroicons/react/solid";

import { Button } from "../Button";
import { Logo } from "../Logo";
import cn from "classnames";

const links = [
	{
		text: "Home",
		href: "/",
		dropdown: [
			{
				text: "Regolamento",
				href: "/regolamento",
			},
			{
				text: "Norme COVID-19",
				href: "/norme-covid-19",
			},
		],
	},
	{
		text: "Team",
		href: "/team",
	},
	{
		text: "Piscina",
		href: "/piscina",
		dropdown: [
			{
				text: "Nuoto libero",
				href: "/piscina/nuoto-libero",
			},
			{
				text: "Corsi",
				href: "/piscina/corsi",
			},
			{
				text: "Acquafitness",
				href: "/piscina/acquafitness",
			},
			{
				text: "Fisioterapia",
				href: "/piscina/fisioterapia",
			},
		],
	},
	{
		text: "Palazzetto",
		href: "/palazzetto",
	},
	{
		text: "Centro estivo",
		href: "/centro-estivo",
	},
	{
		text: "News",
		href: "/news",
	},
];

export const Navbar = () => {
	const { pathname } = useRouter();

	return (
		<div className="sticky top-0 z-10 bg-white py-2 px-4 shadow-sm">
			<div className="mx-auto flex max-w-[1240px] items-center justify-between">
				<div className="flex items-center">
					<Link href="/" passHref>
						<a>
							<Logo />
						</a>
					</Link>
					<nav className="ml-4 font-montserrat text-button font-medium">
						<ul className="flex items-center">
							{links.map((link) => (
								<div className="group relative" key={link.text}>
									<Link href={link.href} passHref>
										<a
											className={cn(
												`inline-flex items-center py-2 px-4 transition`,
												{
													"hover:text-dark-me":
														link.href !== pathname,
												},
												{
													"text-primary-500":
														link.href === pathname,
												}
											)}
										>
											{link.text}
											{link.dropdown && (
												<span className="ml-1">
													<PlusSmIcon className="h-3.5 w-3.5 text-current" />
												</span>
											)}
										</a>
									</Link>
									{link.dropdown && (
										<div className="absolute top-full hidden w-max flex-col border-t-2 border-primary-500 bg-white transition-all group-hover:flex">
											{link.dropdown.map((item) => (
												<Link
													href={item.href}
													passHref
													key={item.text}
												>
													<a
														className={cn(
															`inline-block py-2 px-4 transition`,
															{
																"hover:text-dark-me":
																	item.href !== pathname,
															},
															{
																"text-primary-500":
																	item.href === pathname,
															}
														)}
													>
														{item.text}
													</a>
												</Link>
											))}
										</div>
									)}
								</div>
							))}
						</ul>
					</nav>
				</div>
				<Button color="primary" as={Link} href="/contatti" passHref>
					Contattaci
				</Button>
			</div>
		</div>
	);
};
