import { ParallaxLayer } from "@react-spring/parallax"
import React from "react"

import video from "../../../videos/showCaseVideo.mp4"
export default function ShowCaseVideo() {
  const url = (name: string, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`
  return (
    <>
      <ParallaxLayer
        offset={2.99}
        factor={3.8}
        speed={2}
        className="bg-gray-800"
      />

      <ParallaxLayer offset={2.98} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "40%", marginLeft: "10%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "30%", marginLeft: "60%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={3.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "60%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "30%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "5%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "55%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          src={url("cloud")}
          style={{ display: "block", width: "20%", marginLeft: "50%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "25%", marginLeft: "20%" }}
        />
        <img
          src={url("cloud")}
          style={{ display: "block", width: "10%", marginLeft: "10%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.2}>
        <div
          id="video"
          className="h-screen flex flex-col items-center justify-center lg:px-10"
        >
          <div className="lg:w-2/4 flex flex-col items-center justify-center p-10">
            <video
              className="h-screen w-full object-cover"
              height="240"
              autoPlay
              muted
              controls
              loop
            >
              <source src={video} type="video/mp4" />
              Error Message
            </video>
          </div>
        </div>
      </ParallaxLayer>
    </>
  )
}
