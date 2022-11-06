import { useState, useEffect, useCallback } from "react";

// Styles
import styles from "./counter.module.css";

// Icons
import increment from "../../images/icons/icon-plus.svg";
import decrement from "../../images/icons/icon-minus.svg";

// Interface
interface CounterProps {
    qty: (qty: number) => void;
    submittedProduct: boolean;
}

export const Counter = ({ qty, submittedProduct }: CounterProps) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        qty(count);
    }, [count]);

    useEffect(() => {
        if (submittedProduct) {
            console.log("true");
            setCount(0);
        }
    }, [submittedProduct])

    function incrementCount() {
        setCount(prev => prev + 1);
    }

    function decrementCount() {
        if (count !== 0) setCount(prev => prev - 1);
    }

    return (
        <div className={`${styles.counter} br-10`}>
            <button onClick={() => decrementCount()}><img src={decrement} alt="decrement count" width="12" /></button>
            <span className={styles.counter__count}>{count}</span>
            <button onClick={() => incrementCount()}><img src={increment} alt="increment count" width="12" /></button>
        </div>
    )
}