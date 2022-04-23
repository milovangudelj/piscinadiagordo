import cn from "classnames";
import Link from "next/link";
import { Container } from "../";
import { EXAMPLE_PATH } from "../../lib/constants";

export const Alert = ({ preview }: { preview: boolean }) => {
	return (
		<div
			className={cn("border-b", {
				"bg-accent-7 border-accent-7 text-white": preview,
				"bg-accent-1 border-accent-2": !preview,
			})}
		>
			<Container>
				<div className="py-2 text-center text-sm">
					{preview ? (
						<>
							This page is a preview.{" "}
							<Link href="/api/exit-preview" passHref>
								<a className="hover:text-cyan underline transition-colors duration-200">
									Click here
								</a>
							</Link>{" "}
							to exit preview mode.
						</>
					) : (
						<>
							The source code for this blog is{" "}
							<a
								href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
								className="hover:text-success underline transition-colors duration-200"
							>
								available on GitHub
							</a>
							.
						</>
					)}
				</div>
			</Container>
		</div>
	);
};
