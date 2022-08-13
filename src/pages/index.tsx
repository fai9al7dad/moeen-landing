import * as React from "react"

import Seo from "../components/seo"
import HeroSection from "../components/indexComponents/HeroSection"
import ShowCaseSection from "../components/indexComponents/ShowCaseSection"
import IdeaSection from "../components/indexComponents/IdeaSection"
import ShowCaseVideo from "../components/indexComponents/ShowCaseVideo/ShowCaseVideo"
import DuosShowCase from "../components/indexComponents/DuosShowCase"
import EndSection from "../components/indexComponents/EndSection"
import Header from "../components/Header"
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax"
import Teaser from "../components/indexComponents/warningsMistakesShowCase/Teaser"
import WarningsShow from "../components/indexComponents/warningsMistakesShowCase/WarningsShow"
import MistakeShow from "../components/indexComponents/warningsMistakesShowCase/MistakeShow"
import EndingsWM from "../components/indexComponents/warningsMistakesShowCase/EndingsWM"
import HeaderShowCase from "../components/indexComponents/extrasShowCase/HeaderShowCase"
import SurahsShowCase from "../components/indexComponents/extrasShowCase/SurahsShowCase"
import DuosIntroduction from "../components/indexComponents/extrasShowCase/DuosIntroduction"
import one from "../images/phone_svg/one.svg"
import two from "../images/phone_svg/two.svg"
import three from "../images/phone_svg/three.svg"
import "../styles/global.css"
import DuosScreen from "../components/indexComponents/ShowCaseVideo/DuosScreen"
import DuoWerds from "../components/indexComponents/ShowCaseVideo/DuoWerds"

const IndexPage = () => {
  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`
  const parallax = React.useRef<IParallax>(null!)
  return (
    <div className="w-full h-full">
      <Header parallaxRef={parallax} />
      <Parallax pages={13} ref={parallax}>
        <ParallaxLayer offset={0} speed={0.2}>
          <HeroSection />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={1.5}
          speed={2}
          className="bg-yellow-50"
        />

        <ParallaxLayer offset={1} speed={0.2} className="snap-center">
          <ShowCaseSection />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <IdeaSection />
        </ParallaxLayer>
        {/* <ShowCaseVideo /> */}
        <ParallaxLayer offset={3} speed={0.2}>
          <Teaser />
        </ParallaxLayer>
        <ParallaxLayer offset={4.1} speed={0.1}>
          <img src={one} className="ml-[60%] lg:ml-[80%] w-28" />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={0.2}>
          <WarningsShow />
        </ParallaxLayer>
        <ParallaxLayer offset={5.1} speed={0.1}>
          <img src={three} className="ml-[60%] lg:ml-[80%] w-32" />
        </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.2}>
          <MistakeShow />
        </ParallaxLayer>
        <ParallaxLayer offset={6} speed={0.2}>
          <EndingsWM />
        </ParallaxLayer>
        <ParallaxLayer offset={7} speed={0.2}>
          <HeaderShowCase />
        </ParallaxLayer>
        <ParallaxLayer offset={8} speed={0.2}>
          <SurahsShowCase />
        </ParallaxLayer>

        <ParallaxLayer offset={9} speed={0.2}>
          <DuosIntroduction />
        </ParallaxLayer>

        <ParallaxLayer
          offset={9.98}
          factor={7}
          speed={2}
          className="bg-[#34d399]/30"
        />
        <ParallaxLayer offset={10} speed={0.2}>
          <DuosScreen />
        </ParallaxLayer>
        <ParallaxLayer offset={11} speed={0.2}>
          <DuoWerds />
        </ParallaxLayer>

        <ParallaxLayer offset={12} speed={0.2}>
          <EndSection />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export const Head = () => <Seo title="الرئيسية" />

export default IndexPage
