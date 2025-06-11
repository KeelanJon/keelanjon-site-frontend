import { getProjectBySlug } from "../../../lib/api/strapi/projectData"
import PageHeader from "../../../components/PageHeader"
import ReactMarkdown from "react-markdown"
import Image from "next/image"

// Block components for dynamic content creation.
import VideoPlayer from "../../../components/blocks/video-player"
import ImageCarousel from "@/components/blocks/ImageCarousel"

// SEO Metadata export
export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  const seoBlock = project.blocks.find(
    (block) => block.__component === "shared.seo"
  )

  // console.log(seoBlock)

  try {
    return {
      title: seoBlock?.metaTitle || project.title,
      description: seoBlock?.metaDescription || project.description,
      openGraph: {
        title: seoBlock?.metaTitle || project.title,
        description: seoBlock?.metaDescription || project.description,
      },
    }
  } catch (err) {
    console.error(err)
  }
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const projectData = await getProjectBySlug(slug)

  // console.log(projectData)

  const {
    title,
    subtitle,
    featuredImage,
    description,
    live_project,
    blocks,
    technologies,
  } = projectData

  return (
    <div className="project-page">
      <PageHeader
        subtitle={subtitle}
        title={title}
        description={description}
        technology={technologies}
        liveProject={live_project}
      />

      <div className="featured-image relative mx-auto container px-6 h-68 md:h-[60vh] md:max-h-[600px] md:max-w-[1200px] rounded-lg">
        <div className="relative px-6 w-full h-full ">
          <Image
            src={featuredImage.url}
            fill
            objectFit="cover"
            quality={100}
            alt={featuredImage?.alternativeText || "Alt text"}
            className="rounded-lg "
          />
        </div>
      </div>
      <div className="content">
        <div className="container mx-auto py-12 md:py-24 md:px-12">
          {blocks.map((block) => {
            const blockData = block.body

            switch (block.__component) {
              case "shared.rich-text":
                return (
                  <section
                    key={block.id}
                    className="prose dark:prose-invert mx-auto px-6"
                  >
                    <ReactMarkdown>{blockData}</ReactMarkdown>
                  </section>
                )
              case "shared.video":
                return <VideoPlayer videoSource={block.source} key={block.id} />
              case "shared.carousel":
                return <ImageCarousel key={block.id} blockData={block} />
              default:
                return null
            }
          })}
        </div>
      </div>
    </div>
  )
}
