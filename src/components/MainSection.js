import Header from "./Header";
import { FaDownload } from "react-icons/fa6";
import Image from "next/image";

export default function MainSection() {
  return (
    <div  className="min-h-screen bg-white text-gray-800">
      <Header />
      <main  id="home" className="flex flex-col items-center py-20">
        <div className="grid grid-cols-12 gap-8 w-10/12 items-center">
          <div className="col-span-8 flex items-center gap-5">
           <h2 className="text-2xl font-bold font-serif text-gray-400/70 tracking-wider [writing-mode:vertical-rl] rotate-180">
             Frontend Developer
            </h2>
            <div>
            <h2 className="text-lg text-gray-600 font-medium ">
              Hello, I am
            </h2>
            <h1 className="text-7xl font-extrabold text-gray-900 font-serif">
              Sumbal Ijaz
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-700 w-11/12">
              I&apos;m a Frontend Developer who loves building websites that look great and work fast.
         With skills in React, Next.js, and Tailwind CSS, I turn ideas into smooth user experiences.
        My focus is on making clean, responsive, and user-friendly apps.
            </p>
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-golden-yellow text-black px-6 py-3 rounded-2xl shadow-md hover:bg-golden-yellow/80 cursor-pointer transition-all"  >
                <FaDownload className="text-black size-5" />
                <span className="font-medium">Download Resume</span>
              </a>
              
            </div>
            </div>
    
          </div>
          <div className="col-span-4 flex items-center justify-center gap-6">
            <Image
              src="/profilePicture.png"
              width={280}
              height={280}
              alt="profile"
              className="rounded-full shadow-lg border-4 border-gray-200"  />
          </div>
        </div>
      </main>
    </div>
  );
}
