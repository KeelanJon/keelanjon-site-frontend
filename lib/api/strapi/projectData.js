const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL
const AUTH_HEADER = { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }

export async function getProjects() {
  const res = await fetch(`${STRAPI_URL}/projects?populate=*`, {
    headers: AUTH_HEADER,
    next: { tags: ["projects"] },
  })
  const { data } = await res.json()
  return data
}

export async function getProjectBySlug(slug) {
  try {
    /* Simple Strapi query for getting ALL dynamic zone data doesn't seem to exist...
     Meaning a long a*s api string is required to ensure all required data is retrieved.
     Also any new component added to the page builder will need to be added here too...
     Strapi need to add a better solution to this. */

    const res = await fetch(
      `${STRAPI_URL}/projects?filters[slug][$eq]=${slug}&populate[featuredImage][populate]=*&populate[blocks][on][shared.carousel][populate]=*&populate[blocks][on][shared.seo][populate]=*&populate[blocks][on][shared.rich-text][populate]=*&populate[blocks][on][shared.video][populate=*`,
      {
        headers: AUTH_HEADER,
        next: { tags: ["projects", `project-${slug}`] },
      }
    )

    const { data } = await res.json()
    return data[0]
  } catch (err) {
    console.error("Error: Issue with get project data request.")
    console.error(err)
    return null
  }
}
