import { FaCss3, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { SiCairographics, SiNextdotjs, SiTypescript } from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-red-700 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          {/* Skills */}
          <div className="flex flex-wrap -m-4 -mt-[5rem] ">
            {/* HTML */}
            <div className="p-4 w-[100%] md:w-1/3 ">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
                    <FaHtml5 />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-red-700 h-1 w-[80%] rounded-xl mt-[2px]"></div>
                  </div>
                  <p className="text-red-700 text-right font-bold">80%</p>
                </div>
              </div>
            </div>
            {/* CSS */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
                    <FaCss3 />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-red-700 h-1 w-[75%] rounded-xl mt-[2px]"></div>
                  </div>
                  <p className="text-red-700 text-right font-bold">75%</p>
                </div>
              </div>
            </div>
            {/* Tailwind CSS */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
                    <FaCss3 />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Tailwind CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-red-700 h-1 w-[75%] rounded-xl mt-[2px]"></div>
                  </div>
                  <p className="text-red-700 text-right font-bold">75%</p>
                </div>
              </div>
            </div>
            {/* JavaScript */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
                    <IoLogoJavascript />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JavaScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-red-700 h-1 w-[90%] rounded-xl mt-[2px]"></div>
                  </div>
                  <p className="text-red-700 text-right font-bold">90%</p>
                </div>
              </div>
            </div>
            {/* TypeScript */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
                    <SiTypescript />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-red-700 h-1 w-[90%] rounded-xl mt-[2px]"></div>
                  </div>
                  <p className="text-red-700 text-right font-bold">90%</p>
                </div>
              </div>
            </div>
            {/* Next.js */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
                  <SiNextdotjs />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next.Js
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-red-700 h-1 w-[70%] rounded-xl mt-[2px]"></div>
                  </div>
                  <p className="text-red-700 text-right font-bold">70%</p>
                </div>
              </div>
            </div>
            {/* Graphics Designing*/}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
                  <SiCairographics />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Graphics Designing
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-red-700 h-1 w-[90%] rounded-xl mt-[2px]"></div>
                  </div>
                  <p className="text-red-700 text-right font-bold">90%</p>
                </div>
              </div>
            </div>
            {/* English Composing*/}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
                  <MdOutlineLaptopChromebook />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    English Composing
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-red-700 h-1 w-[90%] rounded-xl mt-[2px]"></div>
                  </div>
                  <p className="text-red-700 text-right font-bold">90%</p>
                </div>
              </div>
            </div>
            {/* Urdu Composing*/}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
                  <MdOutlineLaptopChromebook />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Urdu Composing
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-2 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-red-700 h-1 w-[90%] rounded-xl mt-[2px]"></div>
                  </div>
                  <p className="text-red-700 text-right font-bold">90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
