import { EmptyScreenProps } from "../../types/types";
import { Logo } from "../Icons";
import styles from "./empty.module.css";

export default function EmptyScreen({
  text = "lorem ipsum",
}: EmptyScreenProps) {
  return (
    <div className={styles["empty-screen"]}>
      <Logo color="#fff" />
      <p>{text}</p>
    </div>
  );
}
