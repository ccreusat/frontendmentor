export interface CardProps {
  id?: string;
  year: string;
  category: string;
  rating: string;
  title: string;
  isTrending: boolean;
  isBookmarked: boolean;
  isTrendingSection?: boolean;
  updateBookmarked?: () => void;
  thumbnail: {
    regular: ThumbnailsProps;
    trending: ThumbnailsProps;
  };
}

export interface ThumbnailsProps {
  small?: string;
  medium?: string;
  large?: string;
}

export interface ImageProps {
  small: string | undefined;
  medium?: string | undefined;
  large?: string | undefined;
  title: string;
}

export interface ListProps {
  title: string;
  collection: CardProps[];
  isTrendingSection?: boolean;
}

export interface LogoProps {
  color?: string;
}

export interface EmptyScreenProps {
  text: string;
}

export interface FormInputProps {
  htmlFor: string;
  label: string;
  placeholder: string;
  type: string;
  name: string;
  id: string;
  required: boolean;
  formRef: any;
}

export interface IObjectKeys {
  [key: string]: string | number;
}
