import strapi from "./client"

export async function getProjects() {
  const res = await strapi.get("/projects?populate=*")
  return res.data.data
}

export async function getProjectBySlug(slug) {
  try {
    const res = await strapi.get(
      `/projects?filters[slug][$eq]=${slug}&populate=*`
    )

    return res.data.data[0]
  } catch (err) {
    console.error(err)
    console.error("Error: Issue with get project data request.")
    return null
  }
}
