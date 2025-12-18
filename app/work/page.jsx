import PageHeader from "@/components/PageHeader"
import ProjectCard from "../../components/ProjectCard"
import SlideInUp from "../../components/animations/slideInUp"

export async function generateMetadata() {
  try {
    const pageDataParams = "/work?populate=*"
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
        images: seoBlock.coverImage ? [seoBlock.coverImage] : [],
      },
    }
  } catch (err) {
    console.error(err)
    console.error("Problem getting work page api data.")
  }
}

async function getWorkPageData() {
  const params = "/work?populate[projects][populate]=*"

  try {
    const res = fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    })

    const data = (await res).json()

    return data
  } catch (err) {
    console.error(err)
  }
}

export default async function Work(props) {
  var projects = []

  try {
    const data = await getWorkPageData()
    projects = data.data.projects
  } catch (err) {
    console.error(err)
  }

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="container max-w-screen-lg mx-auto">
        <PageHeader
          title="Featured Work"
          subtitle="Latest Projects"
          description="I've collaborated with talented teams worldwide on websites, character design, and more. Below are selected projects—many larger works remain confidential due to NDAs. Contact me to discuss my full portfolio."
        />
        <SlideInUp>
          <div className="max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {projects.length > 0 ? (
              <>
                {projects.map((project) => {
                  return (
                    <div key={project.documentId}>
                      <ProjectCard data={project} />
                    </div>
                  )
                })}
              </>
            ) : (
              <h2>Projects coming soon...</h2>
            )}
          </div>
        </SlideInUp>
      </div>
    </section>
  )
}
