import React from "react"

import appLogo from "../../images/logo.png"
import appStoreDownload from "../../images/appStoreDownload.svg"
import googlePlayDownload from "../../images/google-play-badge.png"
import ShowCaseSection from "./ShowCaseSection"
import { ParallaxLayer } from "@react-spring/parallax"
const HeroSection = () => {
  return (
    <div
      id="main"
      className="min-h-screen flex flex-col items-center justify-center lg:mt-10"
    >
      <div className="flex flex-col items-center justify-center ">
        <img src={appLogo} className="h-20 w-20 rounded-lg mb-10" />
        <div className="lg:w-2/4 px-5 lg:px-10">
          <div className="text-4xl lg:text-8xl bold text-center leading-[54px] lg:leading-[120px] relative">
            الرفيق المساعد في حفظ وتثبيت القرآن الكريم
            <div className="w-7 lg:w-12 h-7 lg:h-12 rounded-full bg-warning absolute bottom-0 left-28 lg:left-36 -z-10" />
            <div className="w-7 lg:w-12 h-7 lg:h-12 rounded-full bg-mistake absolute top-5 right-0 lg:right-20 -z-10" />
          </div>
          <div className=" flex flex-col lg:flex-row items-center justify-center">
            <a
              href="https://apps.apple.com/us/app/%D9%85%D8%B9%D9%8A%D9%86-%D9%85%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9/id1638765798"
              target="_blank"
            >
              <img src={appStoreDownload} className="w-48 " />
            </a>
            <img src={googlePlayDownload} className="w-56 -m-16 lg:m-0" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
