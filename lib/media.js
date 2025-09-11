import { getStrapiURL } from "./api"

export function getStrapiMedia(media) {
  if(media.data  == undefined) {
    return '';
  }
  const { url } = media.data.attributes 
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}
