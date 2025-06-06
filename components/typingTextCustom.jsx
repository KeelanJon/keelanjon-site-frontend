"use client"

import { TypeAnimation } from "react-type-animation"

export default function TypingTextCustom(props) {
  const words = props.words ? props.words : ["Word", 2500]

  return (
    <TypeAnimation
      sequence={words}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  )
}
