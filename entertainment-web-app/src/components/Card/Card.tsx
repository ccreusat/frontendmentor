// REACT
import { useEffect, useState } from "react";
// Context
import { useStateContext } from "../../context/StateContext";
// Interface
import { CardProps, ThumbnailsProps } from "../../types/types";
// COMPONENTS, ICONS
import { IconBookmarkEmpty, IconBookmarkFull } from "../Icons";
import { IconPlay } from "../Icons/IconPlay";
import { Image } from "../index";
// CSS
import styles from "./card.module.css";
//
import toast from "react-hot-toast";

interface Props extends CardProps {
  index?: number;
}

export default function Card({
  year,
  category,
  rating,
  title,
  isBookmarked,
  isTrendingSection,
  thumbnail,
  updateBookmarked,
  index,
}: Props) {
  const [hasThumbnails, setHasThumbnails] = useState<boolean>(false);
  const [cardThumbnails, setCardThumbnails] = useState<ThumbnailsProps>({});
  const [onBookmark, setOnBookmark] = useState<boolean>(isBookmarked);

  const { user } = useStateContext();

  useEffect(() => {
    setHasThumbnails(false);
    const { trending, regular } = thumbnail;
    let thumbnails;
    if (isTrendingSection) {
      const { small, large } = trending;
      thumbnails = { ...cardThumbnails, small, large };
    } else {
      const { small, medium, large } = regular;
      thumbnails = { ...cardThumbnails, small, medium, large };
    }
    setCardThumbnails(thumbnails);
    setHasThumbnails(true);
  }, [hasThumbnails]);

  useEffect(() => {
    if (!user) {
      setOnBookmark(false);
      return;
    }
    setOnBookmark(isBookmarked);
  }, [user]);

  function toggleBookmarked() {
    if (user) {
      updateBookmarked?.();
      setOnBookmark(!onBookmark);
      if (onBookmark) {
        toast(`${title} removed`);
      } else {
        toast.success(`${title} bookmarked`);
      }
    } else {
      toast.error("You must be logged in to bookmark!");
    }
  }

  // test custom properties animation
  var style = { "--enter-delay": index + "00ms" } as React.CSSProperties;

  return (
    <article style={style} className={styles.card}>
      <header>
        <button className={styles["card__bookmark"]} onClick={toggleBookmarked}>
          {onBookmark ? <IconBookmarkFull /> : <IconBookmarkEmpty />}
        </button>
        <button className={`${styles["card__play"]} heading-xs`}>
          <IconPlay /> Play
        </button>
        {hasThumbnails && (
          <Image
            small={cardThumbnails["small"]}
            medium={cardThumbnails["medium"]}
            large={cardThumbnails["large"]}
            title={title}
          />
        )}
      </header>
      <footer>
        <div className={styles["card__info"]}>
          <span>{year}</span>
          <span>{category}</span>
          <span>{rating}</span>
        </div>
        <h3 className={`heading-xs ${styles["card__title"]}`}>{title}</h3>
      </footer>
    </article>
  );
}
