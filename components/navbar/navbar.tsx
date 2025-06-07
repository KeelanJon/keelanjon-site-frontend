import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavMenu } from "./nav-menu";
import ThemeToggle from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";


const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 xs:h-16 bg-background/50 backdrop-blur-sm border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-2">
        
        <Link href="/">
          <h2 className="font-bold hover:opacity-50 transition ml-2">KeelanJon</h2>
        </Link> 

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link href="/contact">
            <Button variant="outline" className="hidden sm:inline-flex rounded-full cursor-pointer">
              Start Project
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
