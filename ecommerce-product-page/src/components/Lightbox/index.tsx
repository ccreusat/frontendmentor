// Styles
import styles from "./lightbox.module.scss";

// Icon
import close from "../../images/icons/icon-close.svg";

interface Lightbox {
    children: any;
    empty?: boolean;
    closeLightBox: () => void;
}

export const Lightbox = ({ children, closeLightBox }:Lightbox) => {
    return (
        <div className={styles.lightbox}>
            <div style={{width:550, margin: "auto"}}>
                <div onClick={closeLightBox} className={styles.lightbox__close}><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg></div>
                <div className={styles.lightbox__body}>
                    {children}
                </div>
            </div>
        </div>
    )
}