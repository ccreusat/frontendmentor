interface IBlockText {
  title: string;
  text: string;
}

export const BlockText = ({ title, text }: IBlockText) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{text}</p>
    </>
  );
};
