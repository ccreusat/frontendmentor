import * as React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { Layout } from "../container/Layout/Layout";
import { Header } from "../components/Header/Header";
import { ColorComponent } from "../components/Design/Color";
import { TypographyComponent } from "../components/Design/Typography";
import { Button } from "../components/Button/Button";

import "../styles/design-system.scss";

const DesignSystemPage = () => {
    return (
        <React.Fragment>
            <Helmet title="Design System" />
            <Header name="Design System" />
            <Layout>
                <section className="design-row">
                    <h2 className="heading-2">Colors</h2>

                    <div className="design-section flex-section">
                        <ColorComponent
                            color="#66E2DC"
                            rgb="102, 226, 220"
                            hsl="177°, 68%, 64%"
                        />
                        <ColorComponent
                            color="#FA7453"
                            rgb="250, 116, 83"
                            hsl="12°, 94%, 65%"
                        />
                        <ColorComponent
                            color="#FFB964"
                            rgb="255, 185, 100"
                            hsl="33°, 100%, 70%"
                        />
                        <ColorComponent
                            color="#FCFAF9"
                            rgb="252, 250, 249"
                            hsl="20°, 33%, 98%"
                        />
                        <ColorComponent
                            color="#191826"
                            rgb="25, 24, 38"
                            hsl="244°, 23%, 12%"
                        />
                    </div>
                </section>
                <section className="design-row">
                    <h2 className="heading-2">Typography</h2>

                    <div className="design-section grid-section">
                        <TypographyComponent
                            type="H1"
                            font="Bold"
                            size="88px"
                            line="88px"
                            spacing="-1"
                            text="Lorem Ipsum Dolor Sit"
                        />
                        <TypographyComponent
                            type="H2"
                            font="Bold"
                            size="40px"
                            line="52px"
                            text="Donec nec justo eget felis facilisis fermentum"
                        />
                        <TypographyComponent
                            type="Body 1"
                            font="Reg"
                            size="20px"
                            line="34px"
                            text="Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi."
                        />
                        <TypographyComponent
                            type="Body 2"
                            font="Reg"
                            size="16px"
                            line="26px"
                            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti."
                        />
                    </div>
                </section>
                <section className="design-row">
                    <h2 className="heading-2">Buttons</h2>

                    <div className="button-container">
                        <article style={{minWidth: 333}}>
                            <div>
                                <Button provider="ios">
                                    <StaticImage src="../images/icon-apple.svg" alt="Apple" />
                                    iOS Download
                                </Button>
                                <p className="button-info-text">iOS Download Button Default</p>
                            </div>
                            <div>
                                <Button provider="ios" hover={true}>
                                    <StaticImage src="../images/icon-apple.svg" alt="Apple" />
                                    iOS Download
                                </Button>
                                <p className="button-info-text">iOS Download Button Hover</p>
                            </div>
                        </article>
                        <article style={{minWidth: 333}}>
                            <div>
                                <Button provider="android">
                                    <StaticImage src="../images/icon-android.svg" alt="Android" />
                                    Android Download
                                </Button>
                                <p className="button-info-text">Android Download Button Default</p>
                            </div>
                            <div>
                                <Button provider="android" hover={true}>
                                    <StaticImage src="../images/icon-android.svg" alt="Android" />
                                    Android Download
                                </Button>
                                <p className="button-info-text">Android Download Button Hover</p>
                            </div>
                        </article>
                    </div>
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default DesignSystemPage;