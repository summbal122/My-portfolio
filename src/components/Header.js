export default function Header (){
  return(
    <div className="font-semibold w-full flex justify-between items-center px-20 bg-white py-3 text-text shadow-md fixed top-0">
      <h1 className="text-pink-800 text-3xl tracking-widest font-bold">SI </h1>
     <ul className="flex p-4 gap-7 tracking-wider">
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Skills</li>
      <li>Contact</li>
     </ul>
     <button className="bg-secondary text-white px-4 py-2 rounded-lg">Get In Touch</button>

    </div>
  )
}