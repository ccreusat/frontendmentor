import { useState, Fragment } from "react";
// Styles
import styles from "./slideshow.module.scss";

// Interface SlideShow
interface SlideShowProps {
    images: string[];
    thumbnails: string[];
    lightboxImage: number;
    openLightBox: (current: number) => void;
}

export const SlideShow = ({ images, thumbnails, lightboxImage, openLightBox }:SlideShowProps) => {
    const [currentImage, setCurrentImage] = useState<number>(lightboxImage || 0);
    const [selectedThumb, setSelectedThumb] = useState<number>(lightboxImage || 0);

    function getSelectedThumb(index: number) {
        console.log(index)
        setCurrentImage(index);
        setSelectedThumb(index);
    }

    console.log(images);

    return (
        <Fragment>
            <figure className={`${styles.slideshow}`} onClick={() => openLightBox(currentImage)}>
                <picture>
                    <source media="(min-width:768px)" srcSet={images[currentImage]} width="445" height="445" />
                    <img srcSet={images[currentImage]} alt="product" width="375" height="300" />
                </picture>
            </figure>
            <ul className={styles.thumbnails}>
                {
                    thumbnails.map((image, index: number) => {
                        return (
                            <div
                                key={index}
                                className={`${styles.thumbnails__item} ${selectedThumb === index ? styles.thumbnails__item__selected : ''}`}
                                onClick={() => getSelectedThumb(index)}>
                                    <img src={image} alt="image" width="88" height="88" />
                            </div>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
}