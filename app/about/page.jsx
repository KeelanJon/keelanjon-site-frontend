import KeelanJonImage from "../../public/keelanjon-square.jpg"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { IoLogoYoutube, IoLogoInstagram } from "react-icons/io"
import Image from "next/image"
import Link from "next/link"
import { PiSwordFill } from "react-icons/pi"

import TypingTextCustom from "../../components/typingTextCustom"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function About() {
  const webDevTools = [
    {
      title: "HTML, CSS, Javascript",
      description:
        "The ancient trinity—like sword, shield, and spellbook—foundational to any web mage.",
    },
    {
      title: "React",
      description:
        "My go-to spell for summoning powerful UI components and crafting responsive magic portals.",
    },
    {
      title: "Nextjs",
      description:
        "The enchanted framework that lets me build fast-loading castles with server-side sorcery.",
    },
    {
      title: "Strapi",
      description:
        "A friendly headless beast that delivers content payloads straight to the frontlines.",
    },
    {
      title: "Sass",
      description:
        "A sassy extension of CSS—my cloak of variables, mixins, and nested wizardry.",
    },
    {
      title: "Gatsbyjs",
      description:
        "The sprinter of the frontend realm—pre-rendered pages at light speed with a side of GraphQL brew.",
    },
    {
      title: "Stylised Components",
      description:
        "Magical incantations embedded directly into components—perfect for enchanting UI on the fly.",
    },
    {
      title: "TailwindCSS",
      description:
        "Utility-first armor that turns me into a layout battlemage—fast, flexible, and stylishly deadly.",
    },
    {
      title: "WordPress",
      description:
        "The old tome of the web—robust, versatile, and still a reliable ally for client quests.",
    },
  ]

  const videoProductionTools = [
    {
      title: "📸 Main Camera – Sony ZV-E10",
      description:
        "My lightweight companion for all things content. Crisp visuals and compact form make it ideal for tutorials, vlogs, and on-the-go filming.",
    },
    {
      title: "🔭 Primary Lens – Tamron 17–70mm f/2.8",
      description:
        "A versatile lens that handles tight shots and wide frames with ease. Sharp, responsive, and always ready for the next scene.",
    },
    {
      title: "🎬 Video Editor – DaVinci Resolve",
      description:
        "My post-production command centre. Precise editing, cinematic colour grading, and buttery-smooth transitions — all in one powerful package.",
    },
    {
      title: "🎙️ Microphone – RØDE PodMic",
      description:
        "Delivers clean, professional voice recordings. Perfect for voiceovers, livestreams, and tutorials — with that rich, broadcast-quality tone.",
    },
    {
      title: "🖥️ Recording Software – OBS Studio",
      description:
        "The control deck for my screen captures and live recordings. Customizable and reliable for high-quality tutorials and streaming.",
    },
  ]

  const graphicDesignTools = [
    {
      title: "🧙‍♂️ Adobe Creative Suite",
      description:
        "I’ve wielded everything from Photoshop to Illustrator. Still fluent, but these days I lean toward wallet-friendly, subscription-free alternatives.",
    },
    {
      title: "🧿 Affinity Photo",
      description:
        "A powerful image editor that rivals the big names. Perfect for photo work, texture creation, and graphic design — no monthly spell required.",
    },
    {
      title: "🎨 Krita",
      description:
        "An open-source painting tool with serious brush power. Ideal for concept art, textures, and 2D magic on a digital canvas.",
    },
    {
      title: "🧩 Figma",
      description:
        "My go-to for UI/UX mockups and clean design layouts. Intuitive, collaborative, and smooth — design made simple.",
    },
    {
      title: "🖍️ Procreate",
      description:
        "A pocket-sized studio for sketching and illustrating on the go. From thumbnails to full illustrations — it’s always within reach.",
    },
  ]

  const utilityTools = [
    {
      title: "📂 Notion",
      description:
        "My quest log, idea vault, and organizational HQ. I use it to plan projects, track progress, manage content, log books, and basically run my entire private ops — all in one clean, flexible space.",
    },
    {
      title: "🧠 ChatGPT",
      description:
        "My digital spellbook for brainstorming, polishing copy, and solving creative blocks. Whether debugging or drafting, it's a key part of my workflow arsenal.",
    },
    {
      title: "🧠 Google Drive & Docs",
      description:
        "The cloud scrolls I rely on for sharing, storing, and collaborating across devices and dimensions. Perfect for reference dumps and team work.",
    },
    {
      title: "🔄 HandBrake",
      description:
        "A lean, mean compression machine. Keeps my video files light and upload-ready without sacrificing quality — great for clean archiving too.",
    },
    {
      title: "🧼 PureRef",
      description:
        "My visual pinboard for references and inspo. Whether I’m building a character or crafting a scene, it keeps my creative eye focused.",
    },
  ]

  return (
    <div className="about-page">
      {/* <PageHeader title="About" description="Here yo" /> */}
      <section id="about" className="relative py-20 px-6 mt-24">
        <div className="max-w-screen-sm container mx-auto">
          <div className="">
            <ProfileImage />

            {/* Content */}
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 text-xs">
                💫 Paladin Main
              </Badge>
              <h1 className="text-3xl font-bold mb-4 tracking-tight">
                I see you're a curious one, let me tell you a little more. I'm a{" "}
                <TypingTextCustom
                  words={[
                    "coffee lover",
                    2500,
                    "gamer",
                    2500,
                    "husband",
                    2500,
                    "cool uncle",
                    2500,
                  ]}
                />
              </h1>

              <p className="text-muted-foreground mb-6 text-justify">
                I’m a web developer and creative generalist based in South
                Wales, UK, with over 5 years of experience blending design,
                development, and visual storytelling. I build fast, modern
                websites that prioritise user experience, responsive design, and
                SEO—helping businesses stand out and grow online. With a strong
                foundation in both code and creativity, I also craft 3D visuals
                for web, games, and film, bridging the gap between functional
                interfaces and compelling digital experiences.
              </p>

              <p className="text-muted-foreground mb-6 text-justify">
                My journey started in a small Welsh town, where I grew up
                sketching characters and loving technology. After studying
                software engineering and working in IT, I found my stride in web
                development—a place where logic met creativity. In 2020, I
                discovered 3D art through Blender opening up a whole new world,
                and sharing that passion online quickly grew into a thriving
                creator career. Today, I combine my love for development and
                design with a growing online audience of over 200,000 fellow
                creatives, teaching, building, and exploring the edges of what’s
                possible on the web.
              </p>

              <div className="flex flex-wrap gap-4 justify-start">
                <Link
                  href="https://www.instagram.com/keelanjon_"
                  target="_blank"
                >
                  <Button className="rounded-full cursor-pointer">
                    <IoLogoInstagram />
                    Instagram
                  </Button>
                </Link>
                <Link href="https://youtube.com/@keelanjon" target="_blank">
                  <Button
                    variant="outline"
                    className="rounded-full cursor-pointer"
                  >
                    <IoLogoYoutube />
                    YouTube
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-screen-sm mt-12 px-6 md:px-0">
        <div className="tools">
          <Badge variant="secondary" className="mb-4">
            My skill tree
          </Badge>
          <h2 className="text-4xl font-bold mb-4 tracking-tight max-w-lg">
            My Current Loadout of Tools, Tech & Creative Powers 🧙‍♂️
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full transition-all">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Languages, Frameworks and Libraries
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {webDevTools.map((tool, index) => {
                return (
                  <div className="tool" key={index}>
                    <h2 className="font-semibold">{tool.title}</h2>
                    <p>{tool.description}</p>
                  </div>
                )
              })}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="cursor-pointer">
            <AccordionTrigger>Video Production</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {videoProductionTools.map((tool, index) => {
                return (
                  <div className="tool" key={index}>
                    <h2 className="font-semibold">{tool.title}</h2>
                    <p>{tool.description}</p>
                  </div>
                )
              })}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Graphic Design</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {graphicDesignTools.map((tool, index) => {
                return (
                  <div className="tool" key={index}>
                    <h2 className="font-semibold">{tool.title}</h2>
                    <p>{tool.description}</p>
                  </div>
                )
              })}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Creative Utilities</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {utilityTools.map((tool, index) => {
                return (
                  <div className="tool" key={index}>
                    <h2 className="font-semibold">{tool.title}</h2>
                    <p>{tool.description}</p>
                  </div>
                )
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}

const ProfileImage = (props) => {
  return (
    <div className="w-28 h-28 mb-6 mx-auto">
      <div className="relative w-full h-full rounded-full overflow-hidden bg-accent">
        <Image src={KeelanJonImage} alt="" className="object-cover" fill />
      </div>
    </div>
  )
}
