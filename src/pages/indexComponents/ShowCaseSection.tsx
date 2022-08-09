import React from "react"
import heroLargeSvg from "../../images/hero_large.svg"
import heroSmallSvg from "../../images/hero_small.svg"

export default function ShowCaseSection() {
  return (
    <div className="h-screen flex items-center justify-center">
      <img src={heroLargeSvg} className="hidden lg:block" />
      <img src={heroSmallSvg} className="block lg:hidden" />
    </div>
  )
}
