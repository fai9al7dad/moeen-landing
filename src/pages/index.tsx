import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import HeroSection from "./indexComponents/HeroSection"
import ShowCaseSection from "./indexComponents/ShowCaseSection"
import IdeaSection from "./indexComponents/IdeaSection"
import ShowCaseVideo from "./indexComponents/ShowCaseVideo"
import WarningsMistakesShowCase from "./indexComponents/WarningsMistakesShowCase"
import ExtrasShowcase from "./indexComponents/ExtrasShowcase"
import DuosShowCase from "./indexComponents/DuosShowCase"
import EndSection from "./indexComponents/EndSection"
import Header from "../components/Header"

const IndexPage = () => (
  <div>
    <Header />
    <HeroSection />
    <IdeaSection />
    <ShowCaseVideo />
    <WarningsMistakesShowCase />
    <ExtrasShowcase />
    <DuosShowCase />
    <EndSection />
  </div>
)

export const Head = () => <Seo title="الرئيسية" />

export default IndexPage
