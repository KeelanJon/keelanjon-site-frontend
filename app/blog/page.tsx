import PageHeader from "@/components/PageHeader"
import SlideInUp from "../../components/animations/slideInUp"
import BlogCard from "@/components/BlogCard"
import Link from "next/link"
import { getBlogData } from "@/lib/api/strapi/blogData"

export default async function Blog() {
  const blogData = await getBlogData()

  const blogs: {
    id: number
    title: string
    slug: string
    featuredImage: { url: string }
    category?: { id: number; name: string }[]
    description: string
  }[] = blogData.data

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="container max-w-screen-lg mx-auto">
        <PageHeader
          title="Articles"
          subtitle="Coffee and a read"
          description="Welcome to my blog – a space where I share tips, tricks, and insights from the creative and technical worlds I work in. Whether it's coding, design, 3D art, or the latest in tech, you'll find a mix of personal projects, behind-the-scenes processes, and useful takeaways."
        />
        <SlideInUp>
          <div className="max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {blogs.length > 0 ? (
              <>
                {blogs.map((blog) => {
                  return (
                    <Link href={`blog/${blog.slug}`} key={blog.id}>
                      <BlogCard data={blog} />
                    </Link>
                  )
                })}
              </>
            ) : (
              <h2>Blogs coming soon...</h2>
            )}
          </div>
        </SlideInUp>
      </div>
    </section>
  )
}
