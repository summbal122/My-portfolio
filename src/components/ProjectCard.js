import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ imageSrc, title, description, demoLink, githubLink }) {
  return (
    <div className="rounded-3xl bg-white backdrop-blur-md h-120 overflow-hidden flex flex-col  hover:shadow-md transition transform hover:scale-[1.03] hover:-translate-y-1">
    
      <div className="relative h-60 overflow-hidden group">
        <Image src={imageSrc} width={600} height={200} alt="project"
         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex justify-center items-center">
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
       <div className="px-6 py-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <h4 className="text-xs uppercase tracking-wide text-gray-500 font-medium mb-2">
          Case Study
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-5">
          {description}
        </p>
      </div>
    </div>
  );
}
