import React from "react"

import appLogo from "../images/logo.png"
import appStoreDownload from "../images/downloadAppStoreJpg.jpg"
import googlePlayDownload from "../images/google-play-badge.png"
import { animated, useSpring } from "@react-spring/web"
export default function Header({ parallaxRef }) {
  const [showList, setShowList] = React.useState(false)
  const navigateTo = url => {
    parallaxRef.current.scrollTo(url)
    setShowList(false)
  }
  const slidarAnimation = useSpring({
    transform: showList ? "translateX(0)" : "translateX(-100%)",
  })
  return (
    <>
      <div className="flex items-center justify-center  w-full z-40">
        <div className="py-5 w-full px-5   fixed mt-20 backdrop-blur-lg bg-white/10 z-40 ">
          <div className="flex items-center justify-between rtl">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 ml-5"
                fill="currentColor"
                onClick={() => setShowList(!showList)}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <img
                src={appLogo}
                className="w-10 rounded-lg cursor-pointer"
                onClick={() => navigateTo(0)}
              />
            </div>
            {/* <div className="hidden lg:block">
              <div className="flex items-center text-sm">
                <a href="#idea" className="block ml-3">
                  الفكرة
                </a>

                <a href="#video" className="block ml-3">
                  مقطع تعريفي
                </a>
                <a href="#warnings" className="block ml-3">
                  التحديد
                </a>
                <a href="#duo" className="block ml-3">
                  الثنائيات
                </a>
              </div>
            </div> */}

            {/* <div className="hidden lg:block">
              <div className=" flex lg:flex-row items-center justify-center relative">
                <img src={appStoreDownload} className="w-36" />
                <img src={googlePlayDownload} className="w-36 lg:m-0" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {showList && (
        <animated.div
          style={slidarAnimation}
          className="min-h-screen overflow-scroll fixed z-50 w-screen bg-white py-10 flex flex-col justify-between px-5 rtl"
        >
          <div>
            <svg
              className="w-12 h-12 mb-10"
              fill="currentColor"
              onClick={() => setShowList(false)}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <div className="text-6xl bold mb-10">تصفح سريع</div>
            <div
              onClick={() => navigateTo(0)}
              // href="#main"
              className="ml-5 hover:bg-[#34d399] text-4xl w-fit py-1 px-3 rounded-lg hover:text-white cursor-pointer transition duration-150 mt-7 block"
            >
              الرئيسية
            </div>
            <div
              onClick={() => navigateTo(2)}
              // href="#idea"
              className="ml-5 hover:bg-[#34d399] text-4xl w-fit py-1 px-3 rounded-lg hover:text-white cursor-pointer transition duration-150 mt-7 block"
            >
              الفكرة
            </div>

            <div
              onClick={() => navigateTo(4)}
              // href="#warnings"
              className="ml-5 hover:bg-[#34d399] text-4xl w-fit py-1 px-3 rounded-lg hover:text-white cursor-pointer transition duration-150 mt-7 block"
            >
              التحديد
            </div>
            <div
              onClick={() => navigateTo(9)}
              // href="#duo"
              className="ml-5 hover:bg-[#34d399] w-fit py-1 px-3 rounded-lg hover:text-white cursor-pointer transition duration-150 text-4xl mt-7 block"
            >
              الثنائيات
            </div>
          </div>
          <div className=" flex items-center justify-center relative">
            <a
              href="https://apps.apple.com/us/app/%D9%85%D8%B9%D9%8A%D9%86-%D9%85%D8%B5%D8%AD%D9%81-%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D8%A9/id1638765798"
              target="_blank"
              className="w-48"
            >
              <img src={appStoreDownload} />
            </a>

            <img
              src={googlePlayDownload}
              className="w-[10.5rem] lg:w-48 lg:m-0"
            />
          </div>
        </animated.div>
      )}
    </>
  )
}
