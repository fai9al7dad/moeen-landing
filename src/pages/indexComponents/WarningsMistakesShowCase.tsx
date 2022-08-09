import React from "react"

import warningShowCase from "../../images/warningsShowCase.png"
import mistakesShowCase from "../../images/mistakesShowCase.png"
import warningNote from "../../images/warningNote.svg"
import mistakeNote from "../../images/mistakeNote.svg"
export default function WarningsMistakesShowCase() {
  return (
    <>
      <div
        id="warnings"
        className="h-screen flex flex-col items-center px-10 justify-center "
      >
        <div className=" lg:w-2/4 flex flex-col items-center justify-center ">
          <div className="text-5xl drop-shadow lg:text-8xl bold text-center rtl">
            خطوات بسيطة، الإنجاز
            <span className="text-warning rtl bold ">سيذهلك !</span>
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center lg:px-10">
        <div className=" lg:w-2/4 flex flex-col items-center justify-center">
          <div className="px-5">
            <img src={warningShowCase} className="rounded-lg shadow-2xl " />
          </div>

          <div className="mt-10 text-4xl lg:text-8xl bold relative">
            التنبيهات
            {/* <div className="w-full  h-7 rounded-full bg-warning absolute bottom-0 right-0  -z-10" /> */}
          </div>
          <div className="mt-20 text-xl text-center px-5  leading-[60px]">
            يمكنك وضع{" "}
            <span className="bg-[#F49C14] border-2 border-[#FFE275] text-[#FFE275] px-2 rounded-lg  py-1 text-2xl">
              تنبيه
            </span>{" "}
            بالضغط على الكلمة مرة واحدة فقط
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center lg:px-10">
        <div className=" lg:w-2/4 flex flex-col items-center justify-center">
          <div className="px-5">
            <img src={mistakesShowCase} className="rounded-lg shadow-2xl " />
          </div>

          <div className="mt-10 text-4xl lg:text-8xl bold relative">
            الأخطاء
            {/* <div className="w-full  h-7 rounded-full bg-warning absolute bottom-0 right-0  -z-10" /> */}
          </div>
          <div className="mt-20 text-xl text-center px-5 leading-[60px]">
            يمكنك وضع{" "}
            <span className="bg-[#AD324E] border-2 border-[#FF96AD] text-[#FFD8E0] px-2 rounded-lg  py-1 text-2xl">
              خطأ
            </span>{" "}
            بالضغط على الكلمة مرتين أو بالضغط على كلمة بها{" "}
            <span className="bg-[#F49C14] border-2 border-[#FFE275] text-[#FFE275] px-2 rounded-lg  py-1 text-2xl">
              تنبيه
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center lg:px-10">
        <div className=" lg:w-2/4 flex flex-col items-center justify-center">
          <div className="text-6xl lg:text-8xl text-center rtl leading-[120px]">
            <span className="bold">فقط !،</span> والتطبيق يضيف الاتي👇
          </div>
        </div>
      </div>
    </>
  )
}
