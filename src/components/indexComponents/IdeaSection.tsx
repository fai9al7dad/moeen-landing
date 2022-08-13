import React from "react"

export default function IdeaSection() {
  return (
    <div
      id="idea"
      className="h-screen flex flex-col items-center justify-center px-10"
    >
      <div className="lg:w-2/4 flex flex-col items-center justify-center">
        <div className="text-8xl bold">الفكرة</div>
        <div className="text-2xl lg:text-4xl text-center mt-10 leading-[40px] lg:leading-[60px]">
          تطبيق يهدف إلى المساعدة في تقوية الحفظ وتثبيت المراجعة بمعرفة نقاط
          الضعف من خلال التحديد على التنبيهات والأخطاء
        </div>
      </div>
    </div>
  )
}
