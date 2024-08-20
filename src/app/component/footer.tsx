import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-red-100">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              className="rounded-full border-2 border-red-700 "
              src={require("../../../public/assets/picutres/lgo image.png")}
              alt="Image Logo"
              width={50}
              height={50}
            />
            <span className="ml-3 text-xl">Huzaifa Ayub</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Huzaifa-1100.
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.facebook.com/H.Z.Shooter"}
              className="text-gray-500 "
            >
              <FaFacebook className="text-2xl hover:text-blue-700" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.youtube.com/@huboftech944"}
              className="text-gray-500"
            >
              <FaYoutube className="ml-2 text-2xl hover:text-red-700" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/huzaifa-ayub-b29132288/"}
              className="text-gray-500"
            >
              <FaLinkedin className="ml-2 text-2xl hover:text-blue-700" />
            </Link>
            <Link
              target="_blank"
              href={"https://github.com/Huzaifa-1100"}
              className="text-gray-500"
            >
              <FaGithub className="ml-2 text-2xl hover:text-black" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
