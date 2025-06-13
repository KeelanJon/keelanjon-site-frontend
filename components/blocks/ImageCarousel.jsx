import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "../ui/badge"

import Image from "next/image"
import KeelanImage from "@/public/apple-project.png"

export default function ImageCarousel(props) {
  let carousel = []

  try {
    if (!carousel) {
      throw new Error("carousel has no data.")
    } else {
      carousel = props.blockData.carousel
    }
  } catch (err) {
    console.error(err)
  }

  const amountOfImages = carousel.length

  var carouselItems = [
    {
      id: 1,
      title: "Title",
      url: KeelanImage,
      alt: "alt text",
    },
    {
      id: 3,
      title: "Title",
      url: KeelanImage,
      alt: "alt text",
    },
    {
      id: 4,
      title: "Title",
      url: KeelanImage,
      alt: "alt text",
    },
  ]

  const PopulateCarousel = () => {
    return (
      <Carousel>
        <CarouselContent>
          {carousel.map((item, index) => {
            return (
              <CarouselItem className="cursor-grab" key={item.id}>
                <Image
                  src={item.url}
                  height={1080}
                  width={1920}
                  quality={100}
                  alt={item?.alternativeText || "Alt text required"}
                  className="object-cover rounded-lg"
                />
                {amountOfImages > 1 && (
                  <div className="counter-wrapper flex items-center">
                    <Badge className="mx-auto mt-2">
                      Slide {index + 1} of {amountOfImages}
                    </Badge>
                  </div>
                )}
              </CarouselItem>
            )
          })}
        </CarouselContent>
        {amountOfImages > 1 && (
          <div className="slider-controls hidden md:inline">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        )}
      </Carousel>
    )
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      {carousel ? PopulateCarousel() : <h2>Carousel needs images</h2>}
    </section>
  )
}
