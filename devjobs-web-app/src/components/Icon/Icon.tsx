type IconProps = {
  onClick?: () => void;
  className?: string;
  component: React.ReactElement;
};
export const Icon = ({ onClick, component, className }: IconProps) => {
  return (
    <div className={className} onClick={onClick}>
      {component}
    </div>
  );
};
