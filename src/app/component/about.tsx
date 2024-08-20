"use client";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-2xl border-[4px] border-red-700 mx-auto"
              alt="about me"
              src={require("../../../public/assets/picutres/about section.jpg")}
              width={350}
              height={350}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <Typewriter
                options={{
                  strings: ["About Me."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Welcome to my portfolio! I am Huzaifa Ayub, a passionate web
              developer and aspiring CERTIFIED CLOUD APPLIED GENERATIVE AI
              ENGINEER. My portfolio showcases a range of projects built using
              cutting-edge technologies like Next.js. Through continuous
              learning and hands-on experience, I am committed to enhancing user
              experiences and solving real-world problems with innovative web
              solutions.
            </p>
            <div className="flex justify-center">
              <Link target="_blank" href={"/assets/cv/Resume-CV.pdf"}>
                <button className="inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
                  Veiw CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
