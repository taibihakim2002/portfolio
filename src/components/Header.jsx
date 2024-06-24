import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-between items-center h-[80px] w-full fixed top-0 z-50 px-10 md:px-20 text-white uppercase">
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? "bg-[#191919]/80" : "bg-transparent"
        }`}
      ></div>
      <div className="relative z-10">
        <h2 className="font-bold text-lg">Taibi Abdelhakim</h2>
      </div>
      <ul className="relative z-10 gap-20 hidden lg:flex">
        <li className="hover:text-main transition hover:scale-105">
          <a href="#skills">Skills</a>
        </li>
        <li className="hover:text-main transition hover:scale-105">
          <a href="#services">Services</a>
        </li>
        <li className="hover:text-main transition hover:scale-105">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-main transition hover:scale-105">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="relative z-10 text-xl lg:hidden">
        <Sheet>
          <SheetTrigger>
            <IoMenu />
          </SheetTrigger>
          <SheetContent className="bg-[#191919] text-white border-none">
            <ul className="flex flex-col gap-5 mt-16 font-light text-[20px] tracking-widest">
              <li className="hover:text-main transition hover:scale-105">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover:text-main transition hover:scale-105">
                <a href="#services">Services</a>
              </li>
              <li className="hover:text-main transition hover:scale-105">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-main transition hover:scale-105">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
