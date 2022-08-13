import React from "react"
import one from "../../images/phone_svg/one.svg"
import two from "../../images/phone_svg/two.svg"
import three from "../../images/phone_svg/three.svg"
import phone from "../../images/phone_svg/phone.svg"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

export default function ShowCaseSection() {
  return (
    <div className="h-screen flex items-center justify-center">
      <ParallaxLayer factor={1} speed={0.3}>
        <div className="flex items-center justify-center px-28">
          <img src={phone} className="drop-shadow-2xl " />
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={0.5}>
        <img
          src={one}
          className=" drop-shadow-lg absolute top-20 lg:top-40 left-5 lg:left-80"
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.5}>
        <img
          src={three}
          className="drop-shadow-lg absolute top-96 left-5 lg:left-96"
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.5}>
        <img
          src={two}
          className="drop-shadow-lg absolute bottom-96 right-5 lg:right-96"
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.5}>
        <img
          src={three}
          className="drop-shadow-lg absolute bottom-56 right-5 lg:right-80"
        />
      </ParallaxLayer>
    </div>
  )
}
