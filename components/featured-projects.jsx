import { getProjects } from "@/lib/api/strapi/projectData"
import ProjectCard from "@/components/ProjectCard"
import Link from "next/link"
import SlideInUp from "@/components/animations/slideInUp"
import { Badge } from "@/components/ui/badge"

export default function FeaturedProjects(props) {
  var projects = props?.projects || []

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="container max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg md:px-20">
            I’ve had the opportunity to work with amazing people all across the
            world on websites, characters and more. Here’s some of my recent
            projects and work.
          </p>
        </div>
        <SlideInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
