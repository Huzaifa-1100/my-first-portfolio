import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  return (
    // <header className="bg-red-100 z-50 sticky top-0   ">
      <header className="bg-red-100 z-50 sticky top-0 text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-2  md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              className="rounded-full border-2 border-red-700 "
              src={require("../../../public/assets/picutres/lgo image.png")}
              alt="Image Logo"
              width={50}
              height={50}
            />
            <span className="ml-3 text-xl">HUZAIFA AYUB</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Sheet>
              <SheetTrigger className=" lg:hidden  ">
                <Menu />
              </SheetTrigger>
              ٖ
              <SheetContent className="bg-gray-300 py-10 border-4 rounded-xl border-red-700 w-[300px] h-[350px] md:w-[450px] md:h-[450px]">
                <SheetHeader>
                  <SheetTitle className="bg-gray-500 text-red-100 text-center border-[3px] border-red-700 rounded-xl "> NAVBAR</SheetTitle>
                </SheetHeader>
                <ul className="gap-4 py-5 ">
                  <li>
                    <Link
                      href={"/"}
                      className="mr-5  hover:text-red-700 font-bold"
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#about"}
                      className="mr-5 hover:text-red-700 font-bold"
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#skills"}
                      className="mr-5 hover:text-red-700 font-bold"
                    >
                      SKILLS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#project"}
                      className="mr-5 hover:text-red-700 font-bold"
                    >
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#Contact"}
                      className="mr-5 hover:text-red-700 font-bold"
                    >
                      CONTACTS
                    </Link>
                  </li>
                </ul>
                <Link target="_blank" href="/assets/cv/Resume-CV.pdf">
                  <button className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0 active:shadow-md transition-all active:transition-all">
                    Download CV
                    <MdDownloading className="text-lg ml-2" />
                  </button>
                </Link>
              </SheetContent>
            </Sheet>
            <div className="hidden lg:flex items-center px-10  ">
              <Link href={"/"} className="mr-5  hover:text-red-700 font-bold">
                HOME
              </Link>

              <Link
                href={"#about"}
                className="mr-5 hover:text-red-700 font-bold"
              >
                ABOUT
              </Link>

              <Link
                href={"#skills"}
                className="mr-5 hover:text-red-700 font-bold"
              >
                SKILLS
              </Link>

              <Link
                href={"#project"}
                className="mr-5 hover:text-red-700 font-bold"
              >
                PROJECTS
              </Link>

              <Link
                href={"#Contact"}
                className="mr-20 hover:text-red-700 font-bold"
              >
                CONTACTS
              </Link>
              <Link target="_blank" href="/assets/cv/Resume-CV.pdf">
                <button className="inline-flex items-center bg-gray-500 border-[3px]  border-red-700 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0 active:shadow-md transition-all active:transition-all">
                  Download CV
                  <MdDownloading className="text-lg ml-2" />
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    // </header>
  );
};

export default NavBar;
