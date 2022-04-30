import Link from "next/link";

// Components
import { Container, Logo, SocialIcon } from "../";
import { FooterGroup } from "./FooterGroup";

const posts = [
	{
		_id: "p_1",
		title: "Fisioterapia in acqua",
		slug: "post-1",
	},
	{
		_id: "p_2",
		title: "Prenotazione Nuoto Libero",
		slug: "post-2",
	},
	{
		_id: "p_3",
		title: "Norme Comportamento Utenti",
		slug: "post-3",
	},
];

const linkPiscina = [
	{
		_id: "lp_1",
		href: "/piscina",
		title: "Piscina",
	},
	{
		_id: "lp_2",
		href: "/contatti",
		title: "Segreteria",
	},
	{
		_id: "lp_3",
		href: "/piscina/nuoto-libero",
		title: "Nuoto libero",
	},
	{
		_id: "lp_4",
		href: "/norme-covid-19",
		title: "Norme COVID-19",
	},
];

const linkSocieta = [
	{
		_id: "ls_1",
		href: "/team",
		title: "Chi siamo",
	},
	{
		_id: "ls_2",
		href: "/contatti",
		title: "Dove trovarci",
	},
	{
		_id: "ls_3",
		href: "/regolamento",
		title: "Regolamento",
	},
];

const linkSocial = [
	{
		_id: "lsn_1",
		href: "https://www.facebook.com/piscinacomprensorialeagordina",
		icon: () => (
			<SocialIcon
				social="facebook"
				className="h-5 w-5 transition hover:text-[#1877F2]"
			/>
		),
		socialName: "Facebook",
	},
	{
		_id: "lsn_2",
		href: "https://wa.me/393792792351/?text=Salve%2C%20avrei%20bisogno%20di%20un%27informazione%20riguardo%20a%20",
		icon: () => (
			<SocialIcon
				social="whatsapp"
				className="h-5 w-5 transition hover:text-[#25D366]"
			/>
		),
		socialName: "Whatsapp",
	},
	{
		_id: "lsn_3",
		href: "https://m.me/piscinacomprensorialeagordina",
		icon: () => (
			<SocialIcon
				social="messenger"
				className="h-5 w-5 transition hover:text-[#00B2FF]"
			/>
		),
		socialName: "Messenger",
	},
	{
		_id: "lsn_4",
		href: "https://www.instagram.com/piscina_agordo/",
		icon: () => (
			<SocialIcon
				social="instagram"
				className="h-5 w-5 transition hover:text-[#E4405F]"
			/>
		),
		socialName: "Instagram",
	},
];

export const Footer = () => {
	return (
		<footer className="bg-gray-100">
			<Container className="py-16">
				<Link href="/" passHref>
					<a>
						<Logo />
					</a>
				</Link>
			</Container>
			<Container>
				<nav className="flex gap-6 py-3">
					<FooterGroup title="News" list="ol">
						{posts.map((post) => (
							<li key={post._id}>
								<Link href={`/post/${post.slug}`}>
									<a className="transition hover:text-dark-he">
										{post.title}
									</a>
								</Link>
							</li>
						))}
					</FooterGroup>
					<FooterGroup title="Piscina">
						{linkPiscina.map((link) => (
							<li key={link._id}>
								<Link href={link.href} passHref>
									<a className="transition hover:text-dark-he">
										{link.title}
									</a>
								</Link>
							</li>
						))}
					</FooterGroup>
					<FooterGroup title="Società">
						{linkSocieta.map((link) => (
							<li key={link._id}>
								<Link href={link.href} passHref>
									<a className="transition hover:text-dark-he">
										{link.title}
									</a>
								</Link>
							</li>
						))}
					</FooterGroup>
					<FooterGroup title="Social" width="min">
						{linkSocial.map((link) => (
							<li key={link._id}>
								<a
									rel="noreferrer noopener"
									target="_blank"
									href={link.href}
									title={link.socialName}
								>
									{link.icon()}
								</a>
							</li>
						))}
					</FooterGroup>
				</nav>
			</Container>
			<Container className="py-6">
				<span className="text-caption text-dark-le">
					&copy; 2020 Piscina di Agordo | <Link href="#">Credits</Link>
				</span>
			</Container>
		</footer>
	);
};
