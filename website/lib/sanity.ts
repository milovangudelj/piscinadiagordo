import createImageUrlBuilder from "@sanity/image-url";
import { createPreviewSubscriptionHook } from "next-sanity";
import { config } from "./sanityConfig";

export const imageBuilder = createImageUrlBuilder(config);

export const urlForImage = (source: any) =>
	imageBuilder.image(source).auto("format").fit("max");

export const usePreviewSubscription = createPreviewSubscriptionHook(config);
