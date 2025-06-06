"use client"

import ReactPlayer from "react-player"

export default function VideoPlayer(props) {
  const videoSource = props.videoSource

  return (
    <div>
      <ReactPlayer url={videoSource} width="100%" controls />
    </div>
  )
}
