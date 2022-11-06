interface PriceComponentProps {
    currentPrice: number;
    previousPrice: number;
    discount: number;
}

export const PriceComponent = ({currentPrice = 0, previousPrice = 0, discount = 0}: PriceComponentProps) => {
    return (
        <div className="price">
            <div className="flex justify-content-between align-items-center">
                <strong className="price__current">${currentPrice}</strong>
                <span className="price__discount">{discount}%</span>
                <small className="price__previous">${previousPrice}</small>
            </div>
        </div>
    )
}