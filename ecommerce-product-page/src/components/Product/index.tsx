import { useState } from "react";

// Components
import { Counter } from "../Counter";
import { Button } from "../Button";
import { SlideShow } from "../SlideShow";
import { Lightbox } from "../Lightbox";
import { PriceComponent } from "../PriceComponent";

interface ProductProps {
  product: any;
  updatedProduct: ({}) => void;
}

export const Product = ({ product, updatedProduct }: ProductProps) => {
  const [qty, setQty] = useState<number>(0);
  const [submittedProduct, setSubmittedProduct] = useState<boolean>(false);
  const [isOpenLightBox, setIsOpenLightBox] = useState<boolean>(false);
  const [lightboxImage, setLighboxImage] = useState<number>(0);

  // Destructuring Object
  const { brand, title, description, currentPrice, previousPrice, discount, images, thumbnails } = product;

  function submitProduct() {
    updatedProduct({
      title: product.title,
      price: product.currentPrice || product.previousPrice,
      count: qty,
      thumbnail: product.thumbnails[0]
    });
    setSubmittedProduct(true);
  }

  function getQty(qty: number) {
    setSubmittedProduct(false);
    setQty(qty);
  }

  function disabledButton() {
    if (qty === 0) {
      return "disabled";
    } else {
      return "";
    }
  }

  function openLightBox(current: number) {
    setLighboxImage(current);
    setIsOpenLightBox(true);
    document.body.style.overflow = "hidden";
  };

  function closeLightBox() {
    setIsOpenLightBox(false);
    document.body.style.overflow = "";
  }

  return (
    <div className="grid-container">
      <SlideShow
        images={images}
        thumbnails={thumbnails}
        lightboxImage={lightboxImage}
        openLightBox={openLightBox} />

      {
        isOpenLightBox &&
        <Lightbox closeLightBox={closeLightBox}>
          <SlideShow
            images={images}
            thumbnails={thumbnails}
            lightboxImage={lightboxImage}
            openLightBox={openLightBox} />
        </Lightbox>
      }

      <div className="content">
        <strong className="content__headline">{brand}</strong>
        <h1 className="content__title">{title}</h1>
        <p className="content__text">{description}</p>
        <PriceComponent currentPrice={currentPrice} previousPrice={previousPrice} discount={discount} />
        <div className="content__footer">
          <Counter qty={getQty} submittedProduct={submittedProduct} />
          <Button onClick={() => submitProduct()} icon={false} disabled={disabledButton()}>Add to cart</Button>
        </div>
      </div>
    </div>
  )
}