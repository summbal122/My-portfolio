export default function Header (){
  return(
    <div className="w-full flex justify-between items-center px-20 py-3 text-bg-primary">
     <h1 className="text-3xl tracking-widest font-bold">SI </h1>
     <span>sumbalijaz207@gmail.com</span> 
     <ul className="flex p-4 gap-7 tracking-wider font-thick">
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Skills</li>
      <li>Contact</li>
     </ul>
     <button className="bg-bg-primary text-white px-4 py-2 rounded-lg">Get In Touch</button>

    </div>
  )
}