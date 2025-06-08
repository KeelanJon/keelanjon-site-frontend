"use client"

import { useEffect, useState } from "react"
import { GiWingedSword } from "react-icons/gi"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false)
    }, 1000) // ⏱️ Adjust delay as needed

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[var(--background)] flex items-center justify-center transition-opacity duration-600 ease-in-out ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <GiWingedSword className="text-[4rem] animate-bounce" />
    </div>
  )
}
