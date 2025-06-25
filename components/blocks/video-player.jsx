"use client"

import ReactPlayer from "react-player"

export default function VideoPlayer(props) {
  const videoSource = props.videoSource

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 h-[280px] md:h-[580px]">
      <ReactPlayer url={videoSource} width="auto" height="100%" controls />
    </div>
  )
}
