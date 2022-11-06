import { LitElement } from "lit";
import "./user-card";
import "./report-card";
export declare class MyPage extends LitElement {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    data: string[];
    user: {
        name: string;
        image_src: string;
    };
    short: string;
    timeframe: string;
    timesframes: Object[];
    _fetchData: (url?: string) => void;
    _handleClick: (text: string) => void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "my-page": MyPage;
    }
}
