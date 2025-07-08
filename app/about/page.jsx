import KeelanJonImage from "../../public/keelanjon-square.jpg"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IoLogoYoutube, IoLogoInstagram } from "react-icons/io"
import Image from "next/image"
import Link from "next/link"
import Markdown from "react-markdown"
import SlideInUp from "@/components/animations/slideInUp"

import TypingTextCustom from "../../components/typingTextCustom"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export async function generateMetadata() {
  try {
    const pageDataParams = "/about?populate=*"
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}${pageDataParams}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      }
    )
    const { data } = await res.json()
    const seoBlock = data.blocks.find(
      (block) => block.__component === "shared.seo"
    )

    return {
      title: seoBlock.metaTitle || `KeelanJon | ${data.title}`,
      description:
        seoBlock.metaDescription ||
        "Based in Cardiff, KeelanJon is a freelance web developer and 3D generalist serving clients across Wales and the UK. Explore creative digital services and past work.",
      openGraph: {
        title: seoBlock.metaTitle,
        description: seoBlock.metaDescription,
      },
    }
  } catch (err) {
    console.error(err)
    console.error("Problem getting about page api data.")
  }
}

async function getAboutPageData() {
  try {
    const pageDataParams = "/about?populate=*"
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}${pageDataParams}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      }
    )
    const { data } = await res.json()
    return data
  } catch (err) {
    console.error(err)
    console.error("Problem getting about page api data.")
  }
}

export default async function About() {
  const pageData = await getAboutPageData()

  const { bio } = pageData ? pageData : ""

  //Note to self, I'll need to add these to the cms to clean up the code.
  const webDevTools = [
    {
      title: "💀 HTML, CSS, Javascript",
      description:
        "The holy trinity that started it all. No matter how fancy frameworks get, you always come back to these three fundamentals.",
    },
    {
      title: "⚛️ React",
      description:
        "My daily driver for building interfaces. Once you get the hang of hooks and components, everything else feels clunky.",
    },
    {
      title: "🚀 Next.js",
      description:
        "React's cooler older sibling. Server-side rendering, static generation, and routing that actually makes sense.",
    },
    {
      title: "🗡️ Strapi",
      description:
        "The headless CMS that doesn't make you want to pull your hair out. Content management without the usual headaches.",
    },
    {
      title: "💅 Sass",
      description:
        "CSS with superpowers. Variables, nesting, mixins—basically everything CSS should have been from the start.",
    },
    {
      title: "⚡ Gatsby.js",
      description:
        "Static sites that feel dynamic. GraphQL data layer and performance optimization that'll make your lighthouse scores sing.",
    },
    {
      title: "💎 Styled Components",
      description:
        "CSS-in-JS done right. No more hunting through stylesheets—your styles live right where they're used.",
    },
    {
      title: "🎨 TailwindCSS",
      description:
        "Utility classes that click once you get them. Faster than writing custom CSS, and surprisingly maintainable.",
    },
    {
      title: "📚 WordPress",
      description:
        "The reliable workhorse. Sure, it's not the sexiest, but it still powers a third of the web for good reason.",
    },
    {
      title: "🐘 PostgreSQL",
      description:
        "The database that actually handles complex queries without breaking a sweat. Reliable, fast, and feature-rich.",
    },
    {
      title: "🚂 Express.js",
      description:
        "Minimal and flexible—just how I like my backend frameworks. Gets out of your way and lets you build.",
    },
    {
      title: "🟢 Node.js",
      description:
        "JavaScript everywhere. Same language, same mental model, from frontend to backend to build tools.",
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

  const threeDDesignTools = [
    {
      title: "🍩 Blender",
      description:
        "The Swiss Army knife of 3D creation. Free, powerful, and with enough features to make your head spin faster than the default cube everyone deletes.",
    },
    {
      title: "🗿 ZBrush",
      description:
        "Digital clay sculpting at its finest. Where polygons become art and every stroke feels like molding reality itself — if reality had millions of subdivisions.",
    },
    {
      title: "🎨 Substance Painter",
      description:
        "The magic wand for texturing. Turn bland 3D models into photorealistic masterpieces with materials so convincing you'll want to touch your screen.",
    },
    {
      title: "🎮 Unreal Engine",
      description:
        "Epic's powerhouse for creating worlds that look better than reality. From indie games to blockbuster films — it's where dreams get their pixels.",
    },
    {
      title: "🔧 Unity",
      description:
        "The versatile workhorse of game development. Whether you're building mobile puzzlers or VR experiences, Unity makes the impossible feel achievable.",
    },
  ]

  const utilityTools = [
    {
      title: "📝 Notion",
      description:
        "The digital brain that never forgets. Part notebook, part database, part life organizer — it's where chaos meets beautiful, structured productivity.",
    },
    {
      title: "🤖 ChatGPT",
      description:
        "My AI brainstorming buddy who never runs out of coffee or ideas. Perfect for breaking through creative blocks and rubber duck debugging at 3 AM.",
    },
    {
      title: "🧠 Claude",
      description:
        "The thoughtful AI assistant who actually listens. Great for refining ideas, writing help, and those moments when you need a second opinion from silicon.",
    },
    {
      title: "☁️ Google Drive",
      description:
        "The cloud that follows me everywhere. File syncing, collaboration, and that satisfying feeling of never losing work again — even when my laptop doesn't cooperate.",
    },
    {
      title: "🖼️ PureRef",
      description:
        "The ultimate reference image organizer. Drag, drop, and arrange visual inspiration without the desktop chaos — because artists need their moodboards tidy.",
    },
    {
      title: "📡 Postman",
      description:
        "The API whisperer that makes backend communication feel like a conversation. Testing endpoints has never been this smooth or satisfying.",
    },
  ]

  return (
    <div className="about-page">
      <SlideInUp>
        <section id="about" className="relative py-20 px-6 mt-24">
          <div className="max-w-screen-sm container mx-auto">
            <div className="">
              <ProfileImage />

              {/* Content */}
              <div className="text-center">
                <Badge variant="secondary" className="mb-4 text-xs">
                  💫 About me
                </Badge>
                <h1 className="text-3xl font-bold mb-4 tracking-tight">
                  Here's a little more about me. <div></div> I'm{" "}
                  <TypingTextCustom
                    words={[
                      "a coffee powered humanoid.",
                      2000,
                      "a loving husband.",
                      2000,
                      "currently reading Terry Pratchet.",
                      2000,
                      "keen to work with you 👀",
                      2000,
                      "a Paladin Main.",
                      2000,
                      "a Blender Wizard!",
                      2000,
                      "a Tarnished.",
                      2000,
                    ]}
                  />
                </h1>

                <div className="text-muted-foreground mb-6 text-justify prose dark:prose-invert">
                  <Markdown>{bio}</Markdown>
                </div>

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
          <div className="tools text-center">
            <Badge variant="secondary" className="mb-4">
              My skill tree
            </Badge>
            <h2 className="text-4xl font-bold mb-4 tracking-tight max-w-lg mx-auto">
              My Current Loadout of Tools, Tech & Creative Powers 🧙‍♂️
            </h2>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full transition-all"
          >
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
              <AccordionTrigger>3D Production</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {threeDDesignTools.map((tool, index) => {
                  return (
                    <div className="tool" key={index}>
                      <h2 className="font-semibold">{tool.title}</h2>
                      <p>{tool.description}</p>
                    </div>
                  )
                })}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
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
      </SlideInUp>
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
