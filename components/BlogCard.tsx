import placeholder from "../public/placeholder.svg"
import Image from "next/image"
import { Badge } from "./ui/badge"

type Props = {
  data: {
    id: number
    title: string
    slug: string
    featuredImage: { url: string }
    categories?: { id: number; name: string }[]
    description: string
  }
}

export default function BlogCard(props: Props) {
  const { id, title, featuredImage, categories, description } = props.data

  const image = featuredImage ? featuredImage.url : placeholder
  const desc = description ? description : "Missing project description."

  return (
    <div
      key={id}
      className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image ? image : "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Category Badges */}
        {categories && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <Badge key={category.id}>{category.name}</Badge>
            ))}
          </div>
        )}
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-md">{desc}</p>
      </div>
    </div>
  )
}
