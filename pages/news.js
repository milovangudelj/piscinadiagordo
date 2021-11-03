import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import heroImg from "../public/nuota-con-noi.jpg";

export default function Home() {
	return (
		<div>
			<Head>
				<title>News | Piscina Comprensoriale Agordina</title>
				<meta
					name="description"
					content="Sito web della piscina comprensoriale di agordo"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen">News Page</main>
		</div>
	);
}
