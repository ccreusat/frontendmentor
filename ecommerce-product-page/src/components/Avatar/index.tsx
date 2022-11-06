// Styles
import styles from "./avatar.module.scss";

// Images
import user from "../../images/user/image-avatar.png";

export const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <a href="#"><img src={user} alt="user" width="50" height="50"/></a>
        </div>
    )
}