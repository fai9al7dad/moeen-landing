import React from "react"

export default function Teaser() {
  return (
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
  )
}
