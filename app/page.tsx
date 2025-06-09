import About from "@/components/about";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featured-projects"
import axios from "axios"


export async function generateMetadata() {

  try {
    const pageDataParams = `/home?populate=*`
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}${pageDataParams}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      })
    const { data } = await res.json()
    const seoBlock = data.blocks.find(
      (block: { __component: string }) => block.__component === "shared.seo"
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
  }
  catch(err) {
    console.error(err)
    console.error("Issue getting Home page api data.")
  }
}

async function getHomePageData() {
  try {

  const res = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/home?populate[projects][populate]=*`, {
     headers: {
     Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
  })

  return res.data.data

  }catch(err) {
    console.error(err)
  }
}

export default async function Home() {

  const homePageData = await getHomePageData()
  const projects = homePageData?.projects

  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About />
      <FeaturedProjects projects={projects}/>
    </div>
  )
}
