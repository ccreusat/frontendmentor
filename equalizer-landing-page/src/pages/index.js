import * as React from "react"
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Layout } from "../container/Layout/Layout";
import { Button } from "../components/Button/Button";
import "../styles/index.scss";
import { Hero } from "../components/Hero/Hero";

// markup
const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet title="Equalizer" />
      <Header />
      <Layout>
        <Hero title="We make your music sound extraordinary." text="A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ &amp; volume mixer. Control bass, mids, treble, gain control, reverb, and more!"/>
        <section className="premium">
          <div className="premium__illustration"><StaticImage src="../images/illustration-app.png" alt="Illustration" /></div>
          <div className="premium__container">
            <h2 className="heading-2">Premium EQ</h2>
            <p className="premium__text">Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
            <div className="premium__price"><strong>$4</strong><span className="body-1">/ month</span></div>
            <div className="button-group">
              <Button provider="ios">
                <StaticImage src="../images/icon-apple.svg" alt="iOS" />
                iOS Download
              </Button>
              <Button provider="android">
                <StaticImage src="../images/icon-android.svg" alt="Android" />
                Android Download
              </Button>
            </div>
          </div>
        </section>
      </Layout>
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
