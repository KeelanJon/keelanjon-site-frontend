"use client"
import { TypeAnimation } from "react-type-animation"

export default function TypingText() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Web Developer",
        2500, // wait 1s before replacing "Mice" with "Hamsters"
        "3D Generalist",
        2500,
        "Content Creator",
        2500,
        "Barrel Rider ⚔️",
        2500,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  )
}
