import React from "react"

import video from "../../videos/showCaseVideo.mp4"
export default function ShowCaseVideo() {
  return (
    <div
      id="video"
      className="h-screen flex flex-col items-center justify-center lg:px-10"
    >
      <div className="lg:w-2/4 flex flex-col items-center justify-center">
        <video
          className="h-screen w-full object-cover"
          height="240"
          autoPlay
          muted
          loop
        >
          <source src={video} type="video/mp4" />
          Error Message
        </video>
      </div>
    </div>
  )
}
