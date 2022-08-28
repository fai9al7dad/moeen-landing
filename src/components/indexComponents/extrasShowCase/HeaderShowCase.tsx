import React from "react"
import headerShowCase from "../../../images/headerShowCase.png"

export default function HeaderShowCase() {
  return (
    <div className="h-screen flex flex-col items-center justify-center lg:px-10">
      <div className=" lg:w-2/4 flex flex-col items-center justify-center">
        <div className="px-5">
          <img src={headerShowCase} className="rounded-lg shadow-2xl " />
        </div>

        <div className="mt-10 text-4xl text-center lg:text-7xl bold relative">
          المتابعة بالصفحة
          {/* <div className="w-full  h-7 rounded-full bg-warning absolute bottom-0 right-0  -z-10" /> */}
        </div>
        <div className="mt-20 text-xl text-center px-5  leading-[60px]">
          يمكنك رؤية مجمل{" "}
          <span className="bg-[#AD324E] border-2 border-[#FF96AD] text-[#FFD8E0] px-2 rounded-lg  py-1 text-2xl">
            الأخطاء
          </span>{" "}
          و{" "}
          <span className="bg-[#F49C14] border-2 border-[#FFE275] text-[#FFE275] px-2 rounded-lg  py-1 text-2xl">
            التنبيهات
          </span>{" "}
          في الصفحة عن طريق النظر إلى الشريط العلوي
        </div>
      </div>
    </div>
  )
}
