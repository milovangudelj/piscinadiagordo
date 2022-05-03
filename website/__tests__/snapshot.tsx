import { render } from "@testing-library/react";
import Home from "../pages/index";

it("renders homepage unchanged", () => {
	const result: any = render(<Home sponsors={[]} posts={[]} />);
	expect(result.container).toMatchSnapshot();
});
