import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import "./footer.scss";

export const Footer = () => {
    return (
        <footer className="footer container">
            <svg xmlns="http://www.w3.org/2000/svg" style={{display:"none"}}>
                <defs>
                    <symbol id="facebook" viewBox="0 0 24 24">
                        <title>Facebook</title>
                        <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z"/>
                    </symbol>
                    <symbol id="instagram" viewBox="0 0 24 24">
                        <title>Instagram</title>
                        <path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058ZM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"/>
                    </symbol>
                    <symbol id="twitter" viewBox="0 0 20 20">
                        <title>Twitter</title>
                        <path d="M20 2.172a8.192 8.192 0 0 1-2.357.646 4.11 4.11 0 0 0 1.805-2.27 8.22 8.22 0 0 1-2.606.996A4.096 4.096 0 0 0 13.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 0 1 1.392 1a4.109 4.109 0 0 0 1.27 5.478 4.086 4.086 0 0 1-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 0 1-1.853.07 4.106 4.106 0 0 0 3.833 2.849A8.25 8.25 0 0 1 0 14.658a11.616 11.616 0 0 0 6.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0 0 20 2.172Z"/>
                    </symbol>
                    <symbol id="gatsby" viewBox="0 0 24 24">
                        <title>Gatsby</title>
                        <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z"/>
                    </symbol>
                </defs>
            </svg>
            <div>
                <Link to="/" className="footer__logo">
                    <StaticImage src="../../images/logo.svg" alt="Equalizer" />
                </Link>
            </div>
            <p className="footer__text body-2">
                All rights reserved © Equalizer 2021
                <br/> Have any problems? Contact us via social media or email us at <br/> <a href="mailto:equalizer@example.com">equalizer@example.com</a>
            </p>
            <ul className="footer__social">
                <li className="footer__social-link"><a href="#"><svg className="icon icon-facebook"><use xlinkHref="#facebook" href="#facebook"></use></svg><span className="sr-only">Facebook</span></a></li>
                <li className="footer__social-link"><a href="#"><svg className="icon icon-instagram"><use xlinkHref="#instagram" href="#instagram"></use></svg><span className="sr-only">Instagram</span></a></li>
                <li className="footer__social-link"><a href="#"><svg className="icon icon-twitter"><use xlinkHref="#twitter" href="#twitter"></use></svg><span className="sr-only">Twitter</span></a></li>
                <li className="footer__social-link"><a href="#"><svg className="icon icon-gatsby"><use xlinkHref="#gatsby" href="#gatsby"></use></svg><span className="sr-only">Gatsby</span></a></li>
            </ul>
        </footer>
    )
}