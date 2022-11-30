import createImageUrlBuilder from "@sanity/image-url";
import { definePreview } from "next-sanity/preview";
import { config } from "./sanityConfig";

export const imageBuilder = createImageUrlBuilder(config);

export const urlForImage = (source: any) =>
	imageBuilder.image(source).auto("format").fit("max");

export const usePreviewSubscription = definePreview(config);
