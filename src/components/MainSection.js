import Header from "./Header"
import { FaDownload } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function MainSection (){
  return (
     <div className="h-screen">
        <Header/>
        <main className="flex flex-col py-25 px-20">
          <div className="grid grid-cols-12 gap-30">
            <div className="col-span-6 text-dark-green">
             <h2 className="text-4xl text-gray-600  font-bold font-serif -mt-4"><span className="text-blue-900">Front</span>end Developer</h2> 
             <h1 className="text-8xl text-black font-bold font-serif mt-1">
             Sumbal Ijaz
             </h1>        
          </div>
           <div className="col-span-6 px-4">
             <p>
              I create responsive, modern, and user-friendly web applications using React, Next.js, Redux, and Tailwind CSS. My projects showcase my passion for clean design, performance, and smooth user experience.
              </p>
            <div className="mt-6 justify-end flex gap-4 text-bg-primary ">
             <FaGithub size={35} />
             <FaLinkedin size = {35} />
           </div>
         </div>
       </div>
  
        <div className="absolute bottom-0 right-0 p-8">
          <div className="flex flex-col items-center">
           <FaDownload className="text-golden-yellow size-10"/>
           <span className="text-gray-600">Download Resume</span>
          </div>
       </div>
           {/* <div className="w-2/12">
             <Image src="/profile.jpeg" width={500} height={100} alt="profile" className="w-full"/>
           </div> */}
       </main>
     </div>
  )
}


