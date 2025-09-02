export default function About (){
  return (
    <div className="bg-bg-primary py-15 flex items-center flex-col">
       <div className="w-7/12 space-y-10"> 
      <div className="text-center text-xl">
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="mb-2">
          I am a passionate frontend developer with a keen eye for design and a love for creating exceptional digital experiences. With expertise in modern web technologies, I transform ideas into beautiful, functional websites and applications.
        </p>
        <p>
         My journey in web development started with curiosity and has evolved into a professional career focused on delivering high-quality, user-centered solutions. I believe in writing clean code, following best practices, and staying updated with the latest industry trends.
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Technical Skills</h1>

        <div className="flex gap-4 justify-center flex-wrap text-lg">
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">React.js</button>
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">Next.js</button>
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">Javascript</button>
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">Tailwind CSS</button>
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">HTML5</button>
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">CSS3</button>
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">Git</button>
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">Github</button>
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">JIRA</button>
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">Docker</button>
          <button className="bg-light-pink text-main font-semibold py-2 px-5 rounded-lg">Jest</button>
        </div>
      </div>
      </div>

    </div>
  )
}