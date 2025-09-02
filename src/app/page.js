import Header from "@/components/Header";
import Image from "next/image";
import About from "@/components/About";
import { FaDownload } from "react-icons/fa6";
import MyWork from "@/components/MyWork";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Home() {
  return (
       <div className=" bg-bg-primary">
        <Header/>
        <main className="flex flex-col pt-10">
        <div className="grid grid-cols-3 gap-10 px-20 ">
          <div className="col-span-1 flex items-center mt-30 ">
          <Image src="/profile.jpeg" width={500} height={100} alt="profile" className="w-full"/>
        </div>
          <div className="col-span-2 flex flex-col justify-center gap-4 ">
         <h1 className="text-7xl font-bold font-serif">
          Sumbal Ijaz
         </h1>
         <h2 className="text-2xl text-pink-800 font-semibold ">Frontend Developer</h2>
         <p className="text-xl">
          I create responsive, modern, and user-friendly web applications using React, Next.js, Redux, and Tailwind CSS. My projects showcase my passion for clean design, performance, and smooth user experience.
         </p>   
        </div>
        </div>

       <div className="flex w-full justify-end p-8">
        <div className="flex flex-col items-center">
        <FaDownload className="text-pink-800 size-10"/>
       <span className="text-gray-600">Download Resume</span>
       </div>
        </div>
      
        <div className=" bg-black text-white w-full h-20 flex items-center">
         <p className="animate-slide-in-out">
           I create amazing designs and web apps that take your heart
         </p>

        </div>
       
         </main>

  
        <About/>

        <MyWork/>
        <Projects/>
        <Footer/>

    
    
    
          </div>
  );
}
