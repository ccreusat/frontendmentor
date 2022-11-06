import * as React from "react"
import "./button.scss";

interface ButtonProps {
    provider?: string;
    children: any;
    hover: boolean;
}

export const Button = ({provider, children, hover}:ButtonProps) => {
    return <button className={`button block ${provider} ${hover ? 'hover':''}`}>
        {children}
    </button>
}