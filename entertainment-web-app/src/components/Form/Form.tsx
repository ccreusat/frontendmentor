export default function Form({
  title,
  onSubmit,
  children,
}: {
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: JSX.Element;
}) {
  return (
    <div className="auth">
      <h1 className="heading-l">
        <strong>{title}</strong>
      </h1>
      <form action="/" onSubmit={onSubmit} autoComplete="off">
        {children}
      </form>
    </div>
  );
}
