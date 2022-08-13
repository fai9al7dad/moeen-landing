import React from "react"
import surahsShowCase from "../../../images/surahsShowCase.png"

export default function SurahsShowCase() {
  return (
    <div className="h-screen flex flex-col items-center justify-center lg:px-10">
      <div className=" lg:w-2/4 flex flex-col items-center justify-center">
        <div className="px-5">
          <img src={surahsShowCase} className="rounded-lg shadow-2xl " />
        </div>

        <div className="mt-10 text-center text-4xl lg:text-7xl bold relative">
          المتابعة بالسورة
          {/* <div className="w-full  h-7 rounded-full bg-warning absolute bottom-0 right-0  -z-10" /> */}
        </div>
        <div className="mt-20 text-xl text-center px-5 leading-[60px]">
          يمكنك معرفة عدد{" "}
          <span className="bg-[#AD324E] border-2 border-[#FF96AD] text-[#FFD8E0] px-2 rounded-lg  py-1 text-2xl">
            الأخطاء
          </span>{" "}
          و{" "}
          <span className="bg-[#F49C14] border-2 border-[#FFE275] text-[#FFE275] px-2 rounded-lg  py-1 text-2xl">
            التنبيهات
          </span>{" "}
          لكل سورة عن طريق استعراض قائمة السور{" "}
        </div>
      </div>
    </div>
  )
}
