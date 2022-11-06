import { ImageProps } from "../../types/types";

export default function Image({ small, medium, large, title }: ImageProps) {
  return (
    <picture>
      <source media="(min-width:45em)" srcSet={large} />
      <source media="(min-width:30em)" srcSet={medium} />
      <img src={small} alt={title} loading="lazy" />
    </picture>
  );
}
