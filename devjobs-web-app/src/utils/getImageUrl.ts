export function getImageUrl(name: string) {
  const logo = name.toLocaleLowerCase().replace(/ /g, "");
  return new URL(`../assets/logos/${logo}.svg`, import.meta.url).href;
}
