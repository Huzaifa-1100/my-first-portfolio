import Image from "next/image";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="bg-red-100 z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
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
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-red-700 font-bold">
              HOME
            </Link>
            <Link href={"#about"} className="mr-5 hover:text-red-700 font-bold">
              ABOUT
            </Link>
            <Link href={"#skills"} className="mr-5 hover:text-red-700 font-bold">
              SKILLS
            </Link>
            <Link href={"#project"} className="mr-5 hover:text-red-700 font-bold">
              PROJECTS
            </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-red-700 font-bold">
              CONTACTS
            </Link>
          </nav>
          <Link target="_blank" href="/assets/cv/Resume-CV.pdf">
            <button className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 text-white rounded text-base mt-4 md:mt-0 active:shadow-md transition-all active:transition-all">
              Download CV
              <MdDownloading className="text-lg ml-2" />
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
