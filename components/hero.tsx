import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {  Zap } from "lucide-react";
import KeelanImage from "../public/keelanjon-square.jpg"
import Image from "next/image";
import Logos from "./logos";
import TypingText from "./typingText";


const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <div className="relative z-[1] text-center max-w-screen-md">
        <Image src={KeelanImage} alt="Image of KeelanJon" className="max-w-18 rounded-full mx-auto mt-12 mb-4 inset-shadow-sm"/>
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Frontend Engineer
        </Badge>
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Im Keelan, Freelance <div></div> <TypingText/>
        </h1>
        <p className="mt-6 text-[14px] md:text-lg">
            Im a Web Developer and creative generalist offering 
            end-to-end digital solutions for businesses. 
            My core focus is on building high-performance websites 
            with SEO and user experience in mind. 
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 ">
          <Button variant="outline" size="lg" className="rounded-full text-base cursor-pointer transition-colors ease-in-out">
            About me
          </Button> 
          <Button variant="outline" size="lg" className="rounded-full text-base cursor-pointer transition-colors">
            My Work
          </Button> 
        </div>
        <div className="max-w-64 md:max-w-full mx-auto mt-12">
          <p className="mb-4 text-sm">Trusted by my clients</p>
          <Logos />
        </div>
      </div>
    </div>
  );
};

export default Hero;
