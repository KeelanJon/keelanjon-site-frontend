import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"
import KeelanImage from "../public/keelanjon-square.jpg"
import Image from "next/image"
import Logos from "./logos"
import TypingText from "./typingText"
import Link from "next/link"
import BackgroundScene from "@/components/threejs/background-scene"

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <BackgroundScene />
      <div className="relative z-[1] text-center max-w-screen-md">
        <Image
          src={KeelanImage}
          alt="Image of KeelanJon"
          className="max-w-18 rounded-full mx-auto mt-12 mb-4 inset-shadow-sm"
        />
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Frontend Engineer
        </Badge>
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          I&apos;m Keelan, Freelance
          <div></div> <TypingText />
        </h1>
        <p className="mt-6 text-[14px] md:text-lg">
          Based in Cardiff, KeelanJon is a freelance web developer and 3D
          generalist serving clients across Wales,the UK and beyond. Explore
          creative digital services and past work.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 ">
          <Link href="/work">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base cursor-pointer transition-colors ease-in-out"
            >
              View my work
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base cursor-pointer transition-colors"
            >
              Get in touch
            </Button>
          </Link>
        </div>
        <div className="max-w-64 md:max-w-full mx-auto mt-12">
          <p className="mb-4 text-sm">Trusted by my clients</p>
          <Logos />
        </div>
      </div>
    </div>
  )
}

export default Hero
