import { revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret")

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
  }

  const body = await request.json()
  const model: string = body?.model
  const slug: string | undefined = body?.entry?.slug

  const tags: string[] = []

  if (model === "project") {
    tags.push("projects")
    if (slug) {
      tags.push(`project-${slug}`)
    }
  } else if (model === "work") {
    tags.push("work-page")
  } else if (model === "home") {
    tags.push("home-page")
  }

  for (const tag of tags) {
    revalidateTag(tag)
  }

  return NextResponse.json({ revalidated: true, tags })
}
