import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-gradient-to-r from-gray-50 to-gray-100 text-black pt-10">
      <div className="w-11/12 md:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
        
        <div className="md:col-span-6 flex flex-col justify-center">
          <h1 className="text-3xl font-serif text-black font-bold mb-4">Sumbal Ijaz</h1>
          <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
            Frontend Developer passionate about building interactive, accessible, and 
            user-friendly web applications with modern technologies.
          </p>

          <div className="space-y-4 text-gray-700 text-sm md:text-base">
            <div className="flex items-center gap-3">
              <MdEmail size={22} className="text-gray-500" />
              <a href="mailto:sumbalijaz207@gmail.com" className="hover:underline">
                sumbalijaz207@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt size={20} className="text-gray-500" />
              <a href="tel:+923216265422" className="hover:underline"> +92 321 6265422
              </a>
            </div>
          </div>

          <div className="mt-8 flex gap-5 text-gray-600">
            <a href="https://github.com/summbal122" target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:bg-black hover:text-white transition duration-300" > 
               <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/sumbal-ijaz-90047925b" target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gray-300 hover:bg-blue-600 hover:text-white transition duration-300" >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        <form className="md:col-span-6 flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-semibold font-serif text-center mb-4 text-gray-800">
            Contact Me
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input className="border w-full py-3 px-4 rounded-lg focus:ring-1 focus:ring-black/70 outline-none"
              placeholder="First Name"
              required/>
            <input className="border w-full py-3 px-4 rounded-lg focus:ring-1 focus:ring-black/70 outline-none" placeholder="Last Name"
              required />
          </div>

          <input type="email" className="border py-3 px-4 rounded-lg focus:ring-1 focus:ring-black/70 outline-none"
            placeholder="Your Email"
            required/>

          <textarea
            className="border py-3 px-4 rounded-lg focus:ring-1 focus:ring-black/70 outline-none"
            rows={5}
            placeholder="Your Message..."
            required></textarea>

          <button
            type="submit"
            className="bg-golden-yellow text-black font-medium px-6 py-3 rounded-lg shadow-md hover:bg-golden-yellow/80 transition duration-300 hover:cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
      <hr className="mt-10 border-gray-300" />
      <p className="text-center mt-6 text-sm text-gray-500 tracking-wide pb-3">
        © 2025 Sumbal Ijaz — Frontend Developer. All rights reserved.
      </p>
    </footer>
  );
}
