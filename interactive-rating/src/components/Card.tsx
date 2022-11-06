interface ICard {
  children: JSX.Element | JSX.Element[];
}

export const Card = ({ children }: ICard) => {
  return <fieldset>{children}</fieldset>;
};
