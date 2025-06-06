import PageHeader from "@/components/PageHeader"
import { getProjects } from "../../lib/api/strapi/projectData"
import ProjectCard from "../../components/ProjectCard"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import SlideInUp from "../../components/animations/slideInUp"

export const metadata = {
  title:
    "Web Development Portfolio | UK Freelance Developer Projects | KeelanJon",
  description: "The software and art work of KeelanJon",
}

export default async function Work(props) {
  var projects = []

  try {
    projects = await getProjects()
  } catch (err) {
    console.error(err)
  }

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="container max-w-screen-lg mx-auto">
        <PageHeader
          title="Featured Work"
          subtitle="Projects"
          description="Showcasing some of my best projects and technical achievements"
        />
        <SlideInUp>
          <div className="max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {projects.length > 0 ? (
              <>
                {projects.map((project) => {
                  return (
                    <div href={`work/${project.slug}`} key={project.documentId}>
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
