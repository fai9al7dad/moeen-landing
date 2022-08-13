import React from "react"
import DuoScreen from "../../../images/duoShowCase.png"

export default function DuosScreen() {
  return (
    <div
      id="duo"
      className=" flex flex-col items-center justify-center mt-40 lg:h-screen"
    >
      <div className="lg:w-2/4 px-5 lg:px-0">
        <div className="grid lg:grid-cols-2 mb-20 gap-10">
          <div className="flex items-center justify-center lg:justify-start">
            <img src={DuoScreen} />
          </div>
          <div className="text-center lg:text-right">
            <div className="text-2xl bold">شاشة الثنائيات</div>
            <div className="text-lg mt-10 ">
              قم بإرسال دعوة إلى صديقك، ثم إنتظر حتى يقبلك، الأن يمكنك بدأ ورد
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
