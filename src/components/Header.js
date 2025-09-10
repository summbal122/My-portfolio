"use client"
import { Link } from "react-scroll";
export default function Header (){
  return(
    <div className="w-full flex justify-between items-center px-40 py-3 text-bg-primary">
     <h1 className="text-3xl tracking-widest font-bold">SI </h1>
     <ul className="flex p-4 gap-7 tracking-wider font-thick">
      <li className="hover:cursor-pointer hover:text-golden-yellow"><Link smooth={true} duration={500} spy={true} to="home">Home</Link></li>
      <li className="hover:cursor-pointer hover:text-golden-yellow"><Link smooth={true} duration={500} spy={true}to="about" >About</Link></li>
      <li className="hover:cursor-pointer hover:text-golden-yellow"><Link smooth={true} duration={500} spy={true} to="projects">Projects</Link></li>
      <li className="hover:cursor-pointer hover:text-golden-yellow"><Link smooth={true} duration={500} spy={true} to="skills">Skills</Link></li>
      <li className="hover:cursor-pointer hover:text-golden-yellow"><Link smooth={true} duration={500} spy={true} to="contact">Contact</Link></li>
     </ul>
     <button className="bg-bg-primary text-white px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-bg-primary/90"><Link smooth={true} duration={500} spy={true} to="contact">Get In Touch</Link></button>

    </div>
  )
}