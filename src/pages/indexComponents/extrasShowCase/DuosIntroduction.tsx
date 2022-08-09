import React from "react"

export default function DuosIntroduction() {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-10">
      <div className=" lg:w-2/4 flex flex-col items-center justify-center">
        <div className="text-4xl lg:text-8xl bold text-center rtl leading-[60px] lg:leading-[130px]">
          “لكن ماذا لو أردت أن أًسمع لشخص أخر؟!”
        </div>
        <div className="text-lg lg:text-2xl text-center rtl leading-[40px] lg:leading-[60px] mt-10">
          هنا يأتي دور ميزة “الثنائيات“، وهي تمكنك من إضافة صديق، ثم بدأ ورد معه
          ورؤية مصحفه - بأخطاءه وتنبيهاته السابقة - كأنكم تراجعون من مصاحفكم
          الخاصه !، ثم وضع الأخطاء والتنبيهات وإنهاء الورد
        </div>
      </div>
    </div>
  )
}
