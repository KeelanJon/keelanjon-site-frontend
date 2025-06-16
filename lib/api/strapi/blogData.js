export async function getBlogData() {
  try {
    const res = fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate[categories][populate]&populate[featuredImage][populate]=*`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      }
    )

    const data = (await res).json()

    return data
  } catch (err) {
    console.error(err)
    console.error("Issue get blogs data.")
  }
}

export async function getBlogBySlug(slug) {
  try {
    const res = fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[slug][$eq]=${slug}&populate[categories][populate]&populate[featuredImage][populate]=*&populate[blocks][on][shared.carousel][populate]=*&populate[blocks][on][shared.seo][populate]=*&populate[blocks][on][shared.rich-text][populate]=*`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      }
    )

    const data = (await res).json()
    return data
  } catch (err) {
    console.error(err)
    console.error("Issue get blogs data.")
  }
}
