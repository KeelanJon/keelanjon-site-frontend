import placeholder from "../public/placeholder.svg"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { GithubLogo } from "./icons"
import Link from "next/link"

export default function ProjectCard(props) {
  const {
    id,
    title,
    slug,
    featuredImage,
    technologies,
    description,
    live_project,
  } = props.data

  const image = featuredImage ? featuredImage.url : placeholder
  const desc = description ? description : "Missing project description."

  const liveUrl = live_project ? live_project : ""
  const projectSlug = slug ? `/work/${slug}` : ""

  return (
    <div
      key={id}
      className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50"
    >
      {/* Project Image */}
      <Link
        href={projectSlug}
        className="relative h-64 overflow-hidden bg-accent"
      >
        <Image
          src={image ? image : "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </Link>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-md">{desc}</p>

        {/* Technologies */}
        {technologies && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <Badge
                key={tech.documentId}
                variant="secondary"
                className="rounded-full"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        )}
        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {projectSlug && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <Link href={projectSlug}>
                <GithubLogo className="mr-1 h-4 w-4" />
                View Project
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
