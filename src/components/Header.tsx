import React from "react"

import appLogo from "../images/logo.png"
import appStoreDownload from "../images/downloadAppStoreJpg.jpg"
import googlePlayDownload from "../images/google-play-badge.png"
export default function Header() {
  const [showList, setShowList] = React.useState(false)
  return (
    <>
      <div className="flex items-center justify-center  w-full z-40">
        <div className="py-5 w-full px-5 lg:px-0 lg:w-2/4 fixed mt-24 backdrop-blur-lg bg-white/70 z-40 ">
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
              <img src={appLogo} className="w-14 rounded-lg" />
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

            <div className="hidden lg:block">
              <div className=" flex lg:flex-row items-center justify-center relative">
                <img src={appStoreDownload} className="w-36" />
                <img src={googlePlayDownload} className="w-36 lg:m-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showList && (
        <div className="h-screen transition-all duration-300 ease-in-out fixed z-50 w-screen bg-white py-10 flex flex-col justify-between px-5 rtl">
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
            <a
              onClick={() => setShowList(false)}
              href="#main"
              className="ml-5 text-4xl mt-7 block"
            >
              الرئيسية
            </a>
            <a
              onClick={() => setShowList(false)}
              href="#idea"
              className="ml-5 text-4xl mt-7 block"
            >
              الفكرة
            </a>
            <a
              onClick={() => setShowList(false)}
              href="#video"
              className="ml-5 text-4xl mt-7 block"
            >
              مقطع تعريفي
            </a>
            <a
              onClick={() => setShowList(false)}
              href="#warnings"
              className="ml-5 text-4xl mt-7 block"
            >
              التحديد
            </a>
            <a
              onClick={() => setShowList(false)}
              href="#duo"
              className="ml-5 text-4xl mt-7 block"
            >
              الثنائيات
            </a>
          </div>
          <div className=" flex items-center justify-center relative">
            <img src={appStoreDownload} className="w-48" />
            <img src={googlePlayDownload} className="w-48 lg:m-0" />
          </div>
        </div>
      )}
    </>
  )
}
