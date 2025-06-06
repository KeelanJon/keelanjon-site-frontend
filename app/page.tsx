import About from "@/components/about";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featured-projects"
import axios from "axios"


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
