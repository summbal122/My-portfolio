import Header from "./Header";
import { FaDownload } from "react-icons/fa6";
import Image from "next/image";

export default function MainSection() {
  return (
    <div  className="min-h-screen bg-white text-gray-800">
      <Header />
      <main  id="home" className="flex flex-col items-center py-4 lg:py-20">
        <div className="lg:grid lg:grid-cols-12 gap-8 lg:w-10/12 lg:items-center">

           <div className="block md:hidden w-full">
             <div className="flex items-center justify-center gap-3">
           {/* <h2 className="text-xl font-bold font-serif text-gray-400/70 tracking-wider [writing-mode:vertical-rl] rotate-180">
             Frontend Developer
            </h2> */}
            <Image  src="/profilePicture.png" width={280} height={280} alt="profile"
             className="rounded-full shadow-lg border-4 border-gray-200 w-40"  />
             
          </div>

          </div>
          <div className=" p-5 lg:p-0 lg:col-span-8 flex items-center gap-5">
           <h2 className="hidden md:block text-2xl font-bold font-serif text-gray-400/70 tracking-wider [writing-mode:vertical-rl] rotate-180">
             Frontend Developer
            </h2>
            <div>
            <h2 className="lg:text-lg text-gray-600 font-medium ">
              Hello, I am
            </h2>
            <h1 className="text-3xl lg:text-7xl font-extrabold text-gray-900 font-serif">
              Sumbal Ijaz
            </h1>
            <p className="mt-2 lg:mt-5 text-sm lg:text-lg leading-relaxed text-gray-700 lg:w-11/12">
              I&apos;m a Frontend Developer who loves building websites that look great and work fast.
            With skills in React, Next.js, and Tailwind CSS, I turn ideas into smooth user experiences.
            My focus is on making clean, responsive, and user-friendly apps.
            </p>
            <div className="mt-3 lg:mt-8">
              <a href="/resume.pdf" download
                className="inline-flex items-center gap-2 bg-golden-yellow text-black px-6 py-3 rounded-2xl shadow-md hover:bg-golden-yellow/80 cursor-pointer transition-all"  >
                <FaDownload className="text-black size-5" />
               <span className="text-sm lg:text-md font-medium">Download Resume</span>
              </a>
              
            </div>
            </div>
  
          </div>
          <div className="hidden col-span-4 md:block">
             <div className=" w-full flex items-center justify-center gap-6">
            <Image  src="/profilePicture.png" width={280} height={280} alt="profile"
             className="rounded-full shadow-lg border-4 border-gray-200"  />
          </div>

          </div>
         
        </div>
      </main>
    </div>
  );
}
