import Skills from "./Skills"
export default function About (){
  return (
    <div className="bg-bg-primary/85 text-white py-30 flex items-center flex-col font-thin">
       <div className="w-7/12 space-y-10"> 
      <div className="text-center text-xl">
        <h1 className="text-5xl font-serif text-golden-yellow mb-6">About Me</h1>
        <p className="mb-2">
          I am a passionate frontend developer with a keen eye for design and a love for creating exceptional digital experiences. With expertise in modern web technologies, I transform ideas into beautiful, functional websites and applications.
        </p>
        <p>
         My journey in web development started with curiosity and has evolved into a professional career focused on delivering high-quality, user-centered solutions. I believe in writing clean code, following best practices, and staying updated with the latest industry trends.
        </p>
      </div>

      <Skills/>

      </div>

    </div>
  )
}