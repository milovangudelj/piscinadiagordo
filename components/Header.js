import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
	return (
		<header className="sticky top-0 flex justify-center px-2 z-10 bg-white">
			<div className="flex py-2 items-center max-w-screen-xl w-full">
				<Link href="#">
					<Image src="/logo.svg" width="100" height="50" />
				</Link>
				<nav className="flex-grow flex items-center">
					<ul className="flex items-center">
						<NavLink href="/">Home</NavLink>
						<NavLink href="/team">Team</NavLink>
						<NavLink href="/piscina">Piscina</NavLink>
						<NavLink href="/palazzetto">Palazzetto</NavLink>
						<NavLink href="/centri-estivi">Centri estivi</NavLink>
						<NavLink href="/news">News</NavLink>
					</ul>
				</nav>
				<Button>Contattaci</Button>
			</div>
		</header>
	);
};

const NavLink = (props) => {
	return (
		<li className="py-2 px-4 text-xs font-medium tracking-wide uppercase">
			<Link href={props.href}>{props.children}</Link>
		</li>
	);
};

export default Header;
