import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IoLogoYoutube, IoLogoInstagram } from "react-icons/io";
import Image from "next/image";
import { HTMLAttributes } from "react";
import KeelanImage from "../public/keelanjon-square.jpg"
import Link from "next/link";


const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              I'm passionate about design, code and tech.
            </h2>
      
            <p className="text-muted-foreground mb-6 text-justify">
              I’m a web developer and creative generalist based in South Wales, UK, 
              with <b>5+ years of experience.</b> I build fast, modern websites focused on 
              UX, responsive design, and SEO—helping businesses grow online. I also
               have a background in 3D art, creating visuals for web, games, and 
               film. As a content creator, I’ve grown a following of over 200,000+
               fellow creatives, sharing free educational content.
            </p>

            <div className="flex flex-wrap gap-4 justify-start">
              <Link href="https://www.instagram.com/keelanjon_" target="_blank">
                <Button className="rounded-full cursor-pointer">
                  <IoLogoInstagram />
                  Instagram
                </Button>
              </Link>
              <Link href="https://youtube.com/@keelanjon" target="_blank">
                <Button variant="outline" className="rounded-full cursor-pointer">
                  <IoLogoYoutube/>
                  YouTube
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src={KeelanImage} alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;
