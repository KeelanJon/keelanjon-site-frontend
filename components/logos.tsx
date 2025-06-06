import appleLogo from "../public/logos/apple-logo.svg"
import Image from "next/image"
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { div } from "motion/react-client";
import BloodBikesWales from "../public/logos/blood-bikes-wales.svg"
import FireIceLogo from "../public/logos/fireandicefilmslogo.png"
import LivingFullyLogo from "../public/logos/livingfully-logo.png"
import DrivenCreationsLogo from "../public/logos/driven-creations-logo.png"
import AppleLogo from "../public/logos/apple-logo.png"
import WalesLinkLogo from "../public/logos/waleslink-logo.png"





export default function Logos() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee >
        <div className="card flex items-center mx-2">
          <Image src={AppleLogo} alt="Blood Bikes Wales Logo" className="w-[6rem]"></Image>
        </div>
        <div className="card flex items-center mx-2">
          <Image src={WalesLinkLogo} alt="Blood Bikes Wales Logo" className="w-[8rem]"></Image>
        </div>
        <div className="card flex items-center mx-2">
          <Image src={FireIceLogo} alt="Blood Bikes Wales Logo" className="w-[8rem]"></Image>
        </div>
        <div className="card flex items-center mx-2">
          <Image src={DrivenCreationsLogo} alt="Blood Bikes Wales Logo" className="w-[8rem]"></Image>
        </div>
        <div className="card flex items-center mx-2">
          <Image src={LivingFullyLogo} alt="Blood Bikes Wales Logo" className="w-[6rem]"></Image>
        </div>
        <div className="card flex items-center mx-2">
          <Image src={BloodBikesWales} alt="Blood Bikes Wales Logo" className="w-[10rem]"></Image>
        </div>
      </Marquee>

       <Marquee reverse> 
        <div className="card flex items-center mx-2">
          <Image src={BloodBikesWales} alt="Blood Bikes Wales Logo" className="w-[10rem]"></Image>
        </div>
         <div className="card flex items-center mx-2">
          <Image src={LivingFullyLogo} alt="Blood Bikes Wales Logo" className="w-[6rem]"></Image>
        </div> 
        <div className="card flex items-center mx-2">
          <Image src={DrivenCreationsLogo} alt="Blood Bikes Wales Logo" className="w-[8rem]"></Image>
        </div>
        <div className="card flex items-center mx-2">
          <Image src={FireIceLogo} alt="Blood Bikes Wales Logo" className="w-[8rem]"></Image>
        </div> 
        <div className="card flex items-center mx-2">
          <Image src={WalesLinkLogo} alt="Blood Bikes Wales Logo" className="w-[8rem]"></Image>
        </div>
        <div className="card flex items-center mx-2">
          <Image src={AppleLogo} alt="Blood Bikes Wales Logo" className="w-[6rem]"></Image>
        </div>
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
