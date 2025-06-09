import { getProjectBySlug } from "../../../lib/api/strapi/projectData"
import PageHeader from "../../../components/PageHeader"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import SlideInUp from "../../../components/animations/slideInUp"
import VideoPlayer from "../../../components/blocks/video-player"

// SEO Metadata export
export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  const seoBlock = project.blocks.find(
    (block) => block.__component === "shared.seo"
  )

  try {
    const seoImage = project.featuredImage.formats.medium

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

      <div className="featured-image relative mx-auto container px-6 md:px-32 h-48 md:h-[60vh] md:max-h-[700px]">
        <SlideInUp>
          <Image
            src={featuredImage.url}
            width={1920}
            height={1080}
            quality={80}
            alt={featuredImage?.alternativeText || "Alt text"}
            className="w-full h-full object-cover"
          />
        </SlideInUp>
      </div>
      <div className="content px-6">
        <div className="container mx-auto prose dark:prose-invert py-12 md:py-24 md:px-12">
          {blocks.map((block, index) => {
            const blockData = block.body

            switch (block.__component) {
              case "shared.rich-text":
                return <ReactMarkdown key={block.id}>{blockData}</ReactMarkdown>
                break
              case "shared.video":
                return <VideoPlayer videoSource={block.source} key={block.id} />
              default:
                return
            }
          })}
        </div>
      </div>
    </div>
  )
}
