import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { getBlogBySlug } from "@/lib/api/strapi/blogData"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"
import SlideInUp from "@/components/animations/slideInUp"

// Block components for dynamic content creation.
import VideoPlayer from "../../../components/blocks/video-player"
import ImageCarousel from "@/components/blocks/ImageCarousel"

// SEO Metadata export
export async function generateMetadata({ params }) {
  const { slug } = await params
  const blogPostData = await getBlogBySlug(slug)

  const blog = blogPostData.data[0]

  const seoBlock = blog.blocks.find(
    (block) => block.__component === "shared.seo"
  )

  return {
    title: seoBlock?.metaTitle || blog.title,
    description: seoBlock?.metaDescription || blog.description,
    openGraph: {
      title: seoBlock?.metaTitle || blog.title,
      description: seoBlock?.metaDescription || blog.description,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const blogPostData = await getBlogBySlug(slug)

  const { title, categories, featuredImage, description, blocks } =
    blogPostData.data[0]

  return (
    <div className="blog-page">
      <SlideInUp>
        {/* Blog Header */}
        <section className="container blog-header mx-auto pb-12 pt-32 md:pt-48 md:pb-6 lg:max-w-3xl">
          <div className="header-wrapper px-6 md:px-12">
            {categories && (
              <Badge className="rounded-full border-none mr-1">
                <Zap className="fill-current" />
                {categories.map((category) => (
                  <p key={category.id}>{category.name}</p>
                ))}
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl font-bold !leading-[1.2] tracking-tight mt-4">
              {title}
            </h1>
            <h3 className="blog-description py-6 text-muted-foreground text-xl leading-relaxed">
              {description}
            </h3>
          </div>
        </section>

        {/* Featured Image */}
        <section className="featured-image relative mx-auto px-6 md:px-0 container h-68 md:h-[400px] md:max-w-2xl rounded-lg">
          <div className="relative w-full h-full">
            <Image
              src={featuredImage.url}
              fill
              objectFit="cover"
              quality={100}
              alt={featuredImage?.alternativeText || "Alt text"}
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Content */}
        <section className="content">
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
                      <ReactMarkdown key={block.id}>{blockData}</ReactMarkdown>
                    </section>
                  )
                case "shared.video":
                  return (
                    <VideoPlayer videoSource={block.source} key={block.id} />
                  )
                case "shared.carousel":
                  return <ImageCarousel key={block.id} blockData={block} />
                default:
                  return null
              }
            })}
          </div>
        </section>
      </SlideInUp>
    </div>
  )
}
