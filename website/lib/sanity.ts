// client.js
import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "txf3egcy", // you can find this in sanity.json
	dataset: "production", // or the name you chose in step 1
	apiVersion: "2022-04-07", // use a UTC date string
	useCdn: true, // `false` if you want to ensure fresh data
});
