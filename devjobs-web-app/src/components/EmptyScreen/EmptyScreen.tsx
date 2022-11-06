type EmptyScreenProps = {
  text: string;
};
export const EmptyScreen = ({ text }: EmptyScreenProps): JSX.Element => {
  return (
    <div className="empty-screen">
      <article>
        <h3>{text}</h3>
      </article>
    </div>
  );
};
