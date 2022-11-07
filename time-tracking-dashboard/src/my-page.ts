import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./user-card";
import "./report-card";
// import dataJSON from './src/data.json';
import jeremy from "../assets/images/image-jeremy.png";

@customElement("my-page")
export class MyPage extends LitElement {
  static styles = css`
    :host *,
    :host *::before,
    :host *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .user {
      margin-bottom: 1.5rem;
      height: 100%;
      color: var(--white);
      border-radius: 15px;
      background-color: var(--card);
    }
    .user__top {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      border-radius: var(--radius);
      background-color: var(--profile);
    }
    .user__avatar {
      margin: 0;
      width: 78px;
      overflow: hidden;
      border-radius: 50%;
    }
    .user__avatar img {
      display: block;
      max-width: 100%;
      margin: 0;
      height: auto;
    }
    .text {
      font-size: 1rem;
      font-weight: 400;
      color: var(--text);
    }
    .user__name {
      font-size: 1.5rem;
      font-weight: 300;
    }
    .user__top {
      padding: 2rem;
    }
    .user__footer ul {
      padding: 1.5rem 0;
      display: flex;
      align-items: center;
      list-style: none;
    }
    button {
      background: transparent;
      border: 0;
    }
    .user__footer li {
      flex: 1 1 0;
      text-align: center;
    }
    .user__footer li button {
      cursor: pointer;
      font-size: 1.125rem;
      color: var(--link);
      transition: color 400ms ease-in-out;
    }
    .user__footer li.active button,
    .user__footer li:hover button {
      color: var(--white);
    }

    .container {
      margin: 1.5rem;
    }
    @media only screen and (min-width: 720px) {
      .container {
        display: grid;
        grid-template-columns: 2fr 10fr;
        grid-template-rows: auto;
        gap: 2rem;
        max-width: 1110px;
      }
      .user {
        width: 17rem;
        margin-bottom: 0;
      }
      .user__top {
        display: block;
      }
      .user__name {
        font-size: 2.6rem;
      }
      .user__intro {
        margin-top: 2.5rem;
      }
      .user__footer ul {
        padding: 1.875rem;
        flex-direction: column;
        align-items: baseline;
      }
      .user__footer li:not(:first-child) {
        margin-top: 1.25rem;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._fetchData();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  @property({ type: Array })
  data: string[] = [];

  @property({ type: Object })
  user = {
    name: "Jeremy Robson",
    image_src: jeremy,
  };
  short: string = "test";

  @property({
    hasChanged(newVal: string, oldVal: string) {
      const hasChanged: boolean = newVal !== oldVal;
      return hasChanged;
    },
  })
  timeframe: string = "daily";

  timesframes: Object[] = [
    { text: "Daily" },
    { text: "Weekly" },
    { text: "Monthly" },
  ];

  _fetchData = (
    url: string = "https://api.jsonbin.io/v3/b/6368df1565b57a31e6b002f3"
  ) => {
    fetch(url)
      .then((response: any) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((arr: { metadata: any; record: string[] }) => {
        this.data = arr?.record;
        return this.data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  _handleClick = (text: string) => {
    this.timeframe = text.toLowerCase();
  };

  render() {
    return html`
      <main class="container">
        <aside class="user">
          <div class="user__top">
            <figure class="user__avatar">
              <img
                src="${this.user.image_src}"
                alt="photo of ${this.user.name}"
              />
            </figure>
            <div class="user__intro">
              <span class="user__report text">Report for</span>
              <h1 class="user__name">${this.user.name}</h1>
            </div>
          </div>
          <div class="user__footer">
            <ul>
              ${this.timesframes.map((time: any, index: number) => {
                let text = time.text;
                let lowertext = text.toLowerCase();
                return html`
                  <li
                    key=${index}
                    class="${lowertext === this.timeframe
                      ? "active"
                      : "not-active"}"
                  >
                    <button @click=${() => this._handleClick(text)}>
                      ${text}
                    </button>
                  </li>
                `;
              })}
            </ul>
          </div>
        </aside>
        <report-card
          .data=${this.data}
          .timeframe=${this.timeframe}
        ></report-card>
      </main>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "my-page": MyPage;
  }
}
