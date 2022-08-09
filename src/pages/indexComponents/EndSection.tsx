import React from "react"

import logo from "../../images/logo.png"
import appStoreDownload from "../../images/appStoreDownload.svg"
import googlePlayDownload from "../../images/google-play-badge.png"
export default function EndSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-10">
      <div className=" lg:w-2/4 flex flex-col items-center justify-center">
        <div className="px-5">
          <img src={logo} className="rounded-lg shadow-2xl w-60 " />
        </div>

        <div className="mt-10 text-6xl lg:text-8xl bold relative">
          تطبيق معين
          <div className="w-7 lg:w-12 h-7 lg:h-12 rounded-full bg-warning absolute bottom-0 left-28 lg:left-36 -z-10" />
          <div className="w-7 lg:w-12 h-7 lg:h-12 rounded-full bg-mistake absolute top-5 right-0 lg:right-20 -z-10" />
        </div>
        <div className="mt-10 text-2xl  lg:text-3xl text-center px-5">
          مصحف الحفظ والمراجعة
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row items-center justify-center mt-5">
        <img src={googlePlayDownload} className="w-56 " />
        <img src={appStoreDownload} className="w-48 -m-10 lg:m-0" />
      </div>
    </div>
  )
}
