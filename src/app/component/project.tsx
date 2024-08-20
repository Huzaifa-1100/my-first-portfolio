import Image from "next/image";
import Link from "next/link";
const Project = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              My web projects demonstrate my expertise in creating dynamic and
              responsive applications using Next.js and modern frameworks. With
              a focus on clean code and intuitive design, I aim to deliver
              user-friendly and efficient solutions.
            </p>
          </div>
          {/* Projects */}
          <div className="flex flex-wrap -m-4 cursor-pointer">
            {/* Facebook Project */}
            <div className="lg:w-1/2 sm:w-1/1 p-4">
              <div className="flex relative">
                <Image
                  alt="facebook"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/projects/facebook.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 rounded-lg bg-red-50 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-700 mb-1">
                    Facebook Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    FACEBOOK
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This is a simple Facebook login page I built using Next.js,
                    showcasing my skills in modern web development
                  </p>
                  <Link
                    href={
                      "https://facebook-login-git-main-huzaifa-ayubs-projects.vercel.app/"
                    }
                    target="_blank"
                  >
                    <p className="leading-relaxed mt-5 hover:underline hover:text-red-700 ">
                      View Project...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Empty Project */}
            <div className="lg:w-1/2 sm:w-1/1 p-4">
              <div className="flex relative">
                <Image
                  alt="commin soon"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/projects/commin soon.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-red-700 rounded-lg bg-red-50 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-red-700 mb-1 line-clamp-1">
                    Project is under construction
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    COMMING SOON
                  </h1>
                  <p className="leading-relaxed line-clamp-2">
                    This project is currently under construction and will take
                    some time to complete and will be available very soon۔.
                  </p>
                  <Link href={""} target="-blank">
                    <p className="leading-relaxed mt-5 hover:underline hover:text-red-700 ">
                      Keep Calm and wait for it...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
