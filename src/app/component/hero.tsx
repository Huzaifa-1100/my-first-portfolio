"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
const Hero = () => {
  return (
    <section id="Hero" className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI/UX Designer",
                  "Graphics Designer",
                  "Urdu/English Typist",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[200px] h-[2px] bg-red-700"></div>
          <p className="mb-8 leading-relaxed">
            As a future CERTIFIED CLOUD APPLIED GENERATIVE AI ENGINEER, my
            portfolio website showcases my journey in cloud computing, AI
            development, and advanced web technologies like Next.js. Explore my
            projects, challenges, and the innovative work I'm passionate about
            as I continue to grow and refine my skills in this exciting field.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg transition-all">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-full mx-auto w-[25rem] border-red-500 border-2 "
            alt="hero"
            width={500}
            height={500}
            src={require("../../../public/assets/picutres/lgo image.png")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
