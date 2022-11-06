import * as React from "react"
import "./typography-component.scss"

interface TypographyComponentProps {
    type: string;
    font: string;
    size: string;
    line: string;
    spacing?: string;
    text: string;
}

export const TypographyComponent = ({type, font, size, line, spacing, text}) => {
    const ComponentStyle = {
        fontWeight: font === "Bold" && "bold",
        fontSize: size,
        lineHeight: line,
        letterSpacing: spacing
    }

    return (
        <div className="typography-component">
            <div className="typography-component__header">
                <span>{type}</span>
                <span>IBM Plex Sans {font}</span>
                <span>{size}</span>
                <span>{line} Line</span>
                {spacing && <span>{spacing} Spacing</span>}
            </div>
            <p
                style={ComponentStyle}
                className="typography-component__body">{text}</p>
        </div>
    )
}