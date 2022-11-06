export function getImageUrl(name: string) {
  let logo = name.toLocaleLowerCase().replace(/ /g, "");
  return new URL(`../assets/logos/${logo}.svg`, import.meta.url).href;
}
