import strapi from "./client"

export async function getProjects() {
  const res = await strapi.get("/projects?populate=*")
  return res.data.data
}

export async function getProjectBySlug(slug) {
  try {
    /* Simple Strapi query for getting ALL dynamic zone data doesn't seem to exist...
     Meaning a long a*s api string is required to ensure all required data is retrieved.
     Also any new component added to the page builder will need to be added here too...
     Strapi need to add a better solution to this. */

    const res = await strapi.get(
      `/projects?filters[slug][$eq]=${slug}&populate[featuredImage][populate]=*&populate[blocks][on][shared.carousel][populate]=*&populate[blocks][on][shared.seo][populate]=*&populate[blocks][on][shared.rich-text][populate]=*`
    )

    return res.data.data[0]
  } catch (err) {
    console.error("Error: Issue with get project data request.")
    console.error(err)
    return null
  }
}
