import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="scrollbar-hidden">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
