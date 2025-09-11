import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-gradient-to-r from-gray-50 to-gray-100 text-black pt-6 lg:pt-10">
      <div className="w-11/12 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-20">
        
        <div className="md:col-span-6 flex flex-col justify-center">
          <h1 className="text-2xl lg:text-3xl font-serif text-black font-bold ">Sumbal Ijaz</h1>
          <span className="text-golden-yellow text-sm md:text-md font-medium tracking-wide mb-2 lg:mb-3">Get in Touch</span>
          <p className="text-gray-600 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed">
        As a Frontend Developer, I love creating modern, responsive, and user-friendly web apps. Feel free to contact me through email, phone, LinkedIn, GitHub, or simply drop a message using the form.
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

          <div className="mt-4 md:mt-8 flex gap-3 lg:gap-5 text-gray-600">
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

        <form className="md:col-span-6 flex flex-col gap-2 lg:gap-4 bg-white p-4 lg:p-6 rounded-2xl lg:shadow-xl border border-gray-200">
          <h2 className="text-xl lg:text-2xl font-semibold font-serif text-center mb-1 lg:mb-2 text-gray-800">
            Contact Me
          </h2>

          <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
            <input className="border border-gray-200 w-full py-2 lg:py-3 px-4 rounded-lg focus:ring-1 focus:ring-black/70 outline-none"
              placeholder="First Name"
              required/>
            <input className="border border-gray-200 w-full py-2 lg:py-3 px-4 rounded-lg focus:ring-1 focus:ring-black/70 outline-none" placeholder="Last Name"
              required />
          </div>

          <input type="email" className="border border-gray-200 py-2 lg:py-3 px-4 rounded-lg focus:ring-1 focus:ring-black/70 outline-none"
            placeholder="Your Email"
            required/>

          <textarea
            className="border border-gray-200 py-2 lg:py-3 px-4 rounded-lg focus:ring-1 focus:ring-black/70 outline-none"
            rows={5} placeholder="Your Message..."
            required></textarea>

          <button type="submit" className="bg-golden-yellow text-sm lg:text-md text-black font-medium px-6 py-2 md:py-3 rounded-lg shadow-md hover:bg-golden-yellow/80 transition duration-300 hover:cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
      <hr className="mt-6 lg:mt-10 border-gray-300" />
      <p className="text-center mt-2 lg:mt-4 text-[10px] md:text-xs lg:text-sm text-gray-500 tracking-wide pb-3">
        © 2025 Sumbal Ijaz — Frontend Developer. All rights reserved.
      </p>
    </footer>
  );
}
