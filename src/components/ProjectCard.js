import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ imageSrc, title, description, demoLink, githubLink }) {
  return (
    <div className="rounded-3xl bg-white backdrop-blur-md h-120 overflow-hidden flex flex-col  hover:shadow-md transition transform hover:scale-[1.03] hover:-translate-y-1">
    
      <div className="relative h-60 overflow-hidden group">
        <Image src={imageSrc} width={600} height={200} alt="project"
         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center">
          <div className="flex gap-4">
            <a href={demoLink} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white  text-black px-4 py-2 rounded-full shadow-lg hover:scale-105 transition hover:cursor-pointer" >
              <ExternalLink size={18} /> Live Demo
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition hover:cursor-pointer">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="px-6 py-3 flex flex-col">
        <h1 className="text-2xl font-light tracking-wide mb-2 ">{title}</h1>
        <h2 className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-1">
          Case Study
        </h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
