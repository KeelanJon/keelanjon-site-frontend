import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BlueSkyLogo, DribbleLogo, GithubLogo, XLogo } from "./icons";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Logo } from "./navbar/logo";

const footerLinks = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          <Link href="/">
            <Logo/>
          </Link>
          

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved. Built by <Link href="/" className="underline">me.</Link>
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="https://www.youtube.com/@keelanjon" target="_blank">
            <FaYoutube className="h-6 w-6"/>
            </Link>
            <Link href="https://www.instagram.com/keelanjon_" target="_blank">
            <IoLogoInstagram className="h-6 w-6"/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
