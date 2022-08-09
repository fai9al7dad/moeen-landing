import React from "react"
import mistakesShowCase from "../../../images/mistakesShowCase.png"

export default function MistakeShow() {
  return (
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
  )
}
