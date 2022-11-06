import { useState, useEffect } from "react";

// Components
import { Button } from "../Button";
import { Widget } from "../Widget";
import { Toast } from "../Toast";

// Styles
import styles from "./cart.module.scss";

//Icons
import cart from "../../images/icons/icon-cart.svg";
import trash from "../../images/icons/icon-delete.svg";

interface ProductType {
    count: number;
    price: number;
    title: string;
    thumbnail: string;
}

interface CartProps {
    updatedProduct: any;
}

export const Cart = ({ updatedProduct }:CartProps) => {
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [toastVisible, setToastVisible] = useState<boolean>(false);
    const [item, setItem] = useState<ProductType|undefined>();

    useEffect(() => {
        console.log(updatedProduct);
        if (Object.keys(updatedProduct).length !== 0) {
            setItem(updatedProduct);
            setIsEmpty(false);
        }
    }, [updatedProduct]);

    useEffect(() => {
        if (item && item.count === 0) setIsEmpty(true);
        if (item === undefined) {
            setIsEmpty(true);
        }
    },[item]);

    function emptyCart() {
        console.log("click");
        setItem(undefined);
        // setToastVisible(true);
    }

    function renderCartBubble() {
        if (!isEmpty && item) {
            return <div className={styles.cart__counter}>{item.count}</div>
        }
    }

    return (
        <div className={styles.cart}>
            <a href="#" className={styles.cart__link}>
                { renderCartBubble() }
                <img src={cart} aria-hidden="true" width="22" height="20" alt="" />
            </a>

            {isEmpty ? (
                <Widget empty={true}>
                    <p>Your cart is empty</p>
                </Widget>
                ) : (
                <Widget>
                    {
                        item && <div className="cart-product">
                            <img src={item.thumbnail} className="br-10" alt="product" width="50" height="50" />
                            <div>
                                <p className="cart-product__item">{item.title} <br />
                                ${item.price} x {item.count} <strong>${(item.price * item.count).toFixed(2)}</strong></p>
                            </div>
                            <span className="cart-product__trash" onClick={() => emptyCart()}><img src={trash} alt="Remove product" /></span>
                        </div>
                    }
                    <Button>Checkout</Button>
                </Widget>
            )}

            {/* {toastVisible && <Toast>Product was removed successfully</Toast>} */}
        </div>
    )
}