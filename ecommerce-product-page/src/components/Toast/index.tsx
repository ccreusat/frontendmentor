// Styles
import styles from "./toast.module.scss";

interface ToastProps {
    children: any;
}

export const Toast = ({ children }:ToastProps) => {
    return (
        <div className={styles.toast}>
            {children}
        </div>
    )
}