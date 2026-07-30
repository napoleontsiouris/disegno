import { getStrapiURL } from "./api"

export function getStrapiMedia(media) {
  if (!media) {
    return "";
  }

  const url =
    media?.data?.attributes?.url ||
    media?.attributes?.url ||
    media?.url ||
    media?.data?.url;

  if (!url || typeof url !== "string") {
    return "";
  }

  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
