// Styles
import styles from "./widget.module.scss";

interface WidgetProps {
    children: any;
    empty?: boolean;
}

export const Widget = ({ children, empty }:WidgetProps) => {
    return (
        <div className={styles.widget}>
            <div className={styles.widget__header}><strong>Cart</strong></div>
            <div className={empty ? styles.widget__empty : styles.widget__body}>
                {children}
            </div>
        </div>
    )
}