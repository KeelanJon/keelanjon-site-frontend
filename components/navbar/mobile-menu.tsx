import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function MobileMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>My Hours</DrawerTitle>
            <DrawerDescription>
              Im active between 8am - 5pm GMT. <br></br>Maybe longer with some
              coffee...
            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild>
              <Link href="/">
                <Button variant="outline" className="w-full h-12">
                  Home
                </Button>
              </Link>
            </DrawerClose>
            <DrawerClose asChild>
              <Link href="/work">
                <Button variant="outline" className="w-full h-12">
                  Work
                </Button>
              </Link>
            </DrawerClose>
            <DrawerClose asChild>
              <Link href="/about">
                <Button variant="outline" className="w-full h-12">
                  About
                </Button>
              </Link>
            </DrawerClose>
            {/* <DrawerClose asChild>
              <Link href="/blog">
                <Button variant="outline" className="w-full h-12">
                  Blog
                </Button>
              </Link>
            </DrawerClose> */}
            <DrawerClose asChild>
              <Link href="/contact">
                <Button variant="outline" className="w-full h-12">
                  Contact
                </Button>
              </Link>
            </DrawerClose>

            <DrawerClose asChild>
              <Button className="h-12">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
