import BackgroundScene from "@/components/threejs/background-scene"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Sparkles } from "lucide-react"
import Link from "next/link"
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io5"

export default function ComingSoon() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-8">
      <BackgroundScene />

      <div className="relative z-[2] mx-auto flex min-h-[calc(100vh-4rem)] max-w-screen-md flex-col items-center justify-center text-center">
        <Badge className="rounded-full border-none">
          <Sparkles className="fill-current" />
          New website in the making
        </Badge>

        <h1 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-6xl">
          Potions Brewing.
        </h1>

        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          I am rebuilding this corner of the internet into something sharper,
          stranger, and a bit more me. You can find me on my social pages in the
          meantime.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="mailto:info@keelsdesign.co.uk">
              <Mail />
              Email
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link
              href="https://www.instagram.com/keelanjon_"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoInstagram />
              Instagram
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link
              href="https://youtube.com/@keelanjon"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoYoutube />
              YouTube
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
