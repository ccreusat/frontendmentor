// Styles
import styles from "./button.module.scss";

// Icons
import cart from "../../images/icons/icon-cart.svg";

// Interface
interface ButtonProps {
    children: string;
    icon?: boolean;
    size?: string;
    disabled?: any;
    onClick?: () => void;
}

export const Button = ({children, onClick, icon = false, size = "medium", disabled = ""}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.button} br-10 ${size}`}
            type="submit"
            disabled={disabled}>
            { icon && <img src={cart} aria-hidden="true" /> }
            <span>{children}</span>
        </button>
    )
}