import clsx from "clsx";
import "./Button.css";

interface ButtonProps {
  isLink?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
  href?: string;
  variant?: string;
  text?: string;
  tag?: JSX.IntrinsicElements;
  children?: React.ReactNode;
  withIcon?: boolean;
  disabled?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  isLink = false,
  type,
  href,
  variant,
  withIcon = false,
  children,
  disabled,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  const classNames = clsx({ "button-with-icon": withIcon, className });
  const CustomTag = isLink ? "a" : "button";
  return (
    <CustomTag
      disabled={disabled}
      type={type}
      href={href}
      onClick={onClick}
      className={`button button-${variant} ${classNames}`}
      {...props}
    >
      {children}
    </CustomTag>
  );
};

// export let Tab = Object.assign(TabRoot, { Group: Tabs, List, Panels, Panel })
