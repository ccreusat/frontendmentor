// CSS
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./button.module.css";

type ButtonTypes = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
  type: ButtonTypes;
  variant: string;
  children: JSX.Element;
}
export default function Button({ type, variant, children }: ButtonProps) {
  return (
    <button type={type} className={`${styles.button} ${styles[`${variant}`]}`}>
      {children}
    </button>
  );
}
