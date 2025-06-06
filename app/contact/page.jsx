import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"
import Image from "next/image"
import Logos from "../../components/logos"
import TypingTextCustom from "../../components/typingTextCustom"
import SlideInUp from "../../components/animations/slideInUp"

const Contact = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <SlideInUp>
        <div className="relative z-[1] text-center max-w-screen-md">
          <Badge className="rounded-full border-none">
            <Zap className="fill-current" />
            Start a Project
          </Badge>
          <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
            <TypingTextCustom
              words={[
                "Hello!",
                2000,
                "Shwmae!",
                2000,
                "Konnichiwa!",
                2000,
                "你好!",
                2000,
                "Jambo!",
                2000,
                "Hej!",
                2000,
                "مرحبا!",
                2000,
                "Salut!",
                2000,
                "Добрий день!",
                2000,
              ]}
            />
            <div></div>
            Drop me a line.{" "}
          </h1>
          <p className="mt-6 text-[14px] md:text-lg">
            Got an idea brewing? Whether it’s a shiny new website, a clever app,
            or bold 3D visuals — I’m here to help bring it to life. Let’s chat
            and make some digital magic.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 ">
            <span className="text-muted-foreground">Drop me a line at:</span>
            <br />
            <a
              href="mailto:info@keelsdesign.co.uk"
              className="underline underline-offset-4 hover:opacity-50 transition"
            >
              info@keelsdesign.co.uk
            </a>
          </div>
          <div className="max-w-64 md:max-w-full mx-auto mt-12">
            <p className="mb-4 text-sm">You're in good company</p>
            <Logos />
          </div>
        </div>
      </SlideInUp>
    </div>
  )
}

export default Contact
