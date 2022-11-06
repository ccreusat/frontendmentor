import * as React from "react"
import "./color-component.scss"

export const ColorComponent = ({color, rgb, hsl}) => {
    return (
        <div className="color-component">
            <strong className="color-component__color" style={{backgroundColor: color}}>{color}</strong>
            <div className="color-component__info">
                <div>
                    <span>RGB</span><span>{rgb}</span>
                </div>
                <div>       
                    <span>HSL</span><span>{hsl}</span>
                </div>
            </div>
        </div>
    )
}